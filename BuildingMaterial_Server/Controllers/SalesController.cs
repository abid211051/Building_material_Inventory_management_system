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
    public class SalesController : ControllerBase
    {
        private readonly BuildingMaterialContext _context;

        public SalesController(BuildingMaterialContext context)
        {
            _context = context;
        }

        // GET: api/Sales
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Sale>>> GetSales()
        {
          if (_context.Sales == null)
          {
              return NotFound();
          }
            var result = await (from product in _context.Products
                                join sale in _context.Sales on product.Proid equals sale.Proid
                                join customer in _context.Customers on sale.Cusid equals customer.Cusid
                                select new
                                {
                                    SaleId = sale.Saleid,
                                    SaleQuantity = sale.Salequantity,
                                    ProductName = product.Productname,
                                    SalePrice = sale.Saleprice,
                                    CustomerId = customer.Cusid,
                                    CustomerName = customer.Customername,
                                }).ToListAsync();


            return Ok(result);
        }

        // POST: api/Sales
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Sale>> PostSale(Sale sale)
        {
          if (_context.Sales == null)
          {
              return Problem("Entity set 'BuildingMaterialContext.Sales'  is null.");
          }
            var stock = _context.Stocks.FirstOrDefault(s => s.Proid == sale.Proid);
            if(stock != null && sale.Salequantity!=0)
            {
                int quantity = (int)(stock.Quantity - sale.Salequantity);
                if (quantity >= 0)
                {
                    stock.Quantity = quantity;
                    _context.Entry(stock).State = EntityState.Modified;
                    _context.Sales.Add(sale);
                    await _context.SaveChangesAsync();
                }
                else
                {
                    return Problem("Less product available in stock");
                }
                return Ok(new
                {
                   Message= "Sales Data created successfully",
                   Sale = sale
                });
            }
            else
            {
                return Problem("Sales Quantity have to be more than 0 or no same product in stock");
            }
        }

        // DELETE: api/Sales/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSale(int id)
        {
            if (_context.Sales == null)
            {
                return NotFound();
            }
            var sale = await _context.Sales.FindAsync(id);
            if (sale == null)
            {
                return NotFound();
            }

            _context.Sales.Remove(sale);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SaleExists(int id)
        {
            return (_context.Sales?.Any(e => e.Saleid == id)).GetValueOrDefault();
        }
    }
}
