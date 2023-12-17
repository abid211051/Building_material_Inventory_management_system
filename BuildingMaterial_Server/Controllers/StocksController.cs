using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BuildingMaterial.Models;

namespace BuildingMaterial.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StocksController : ControllerBase
    {
        private readonly BuildingMaterialContext _context;

        public StocksController(BuildingMaterialContext context)
        {
            _context = context;
        }

        // GET: api/Stocks
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Stock>>> GetStocks()
        {
          if (_context.Stocks == null)
          {
              return NotFound();
          }
            var stocks = await (from product in _context.Products
                                  join stock in _context.Stocks on product.Proid equals stock.Proid
                                  select new
                                  {
                                      StockId = stock.Stockid,
                                      ProductId = product.Proid,
                                      ProductName = product.Productname,
                                      SellPrice = product.Sellprice,
                                      CostPrice = product.Costprice,
                                      Quanttity = stock.Quantity
                                  })
                                .ToListAsync();

            return Ok(stocks);
        }
        private bool StockExists(int id)
        {
            return (_context.Stocks?.Any(e => e.Stockid == id)).GetValueOrDefault();
        }
    }
}
