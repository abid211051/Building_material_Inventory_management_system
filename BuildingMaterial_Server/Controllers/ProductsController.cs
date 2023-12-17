using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BuildingMaterial.Models;
using System.Text.Json;
using Microsoft.AspNetCore.Http.HttpResults;
using System.Text.Json.Serialization;
using System.Collections;

namespace BuildingMaterial.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly BuildingMaterialContext _context;

        public ProductsController(BuildingMaterialContext context)
        {
            _context = context;
        }

        // GET: api/Products
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
        {
          if (_context.Products == null)
          {
              return NotFound();
          }
            return await _context.Products.ToListAsync();
        }

        // PUT: api/Products/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProduct(int id, Product product)
        {
            if (id != product.Proid)
            {
                return BadRequest();
            }
            var stock = _context.Stocks.FirstOrDefault(s => s.Proid == product.Proid);
            if (stock != null)
            {
                stock.Quantity = product.Quantity;
                _context.Entry(stock).State = EntityState.Modified;
            }

            _context.Entry(product).State = EntityState.Modified;

            await _context.SaveChangesAsync();

            var options = new JsonSerializerOptions
            {
                ReferenceHandler = ReferenceHandler.Preserve,
            };

            var result = new
            {
                Message = "Product created Successfully",
                Product = product,
                Stock = stock?.Quantity,
            };

            var jsonString = JsonSerializer.Serialize(result, options);
            return Content(jsonString, "application/json");
        }

        // POST: api/Products
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Product>> PostProduct(Product product)
        {
            if (_context.Products == null)
            {
                return Problem("Entity set 'BuildingMaterialContext.Products' is null.");
            }

            _context.Products.Add(product);
            await _context.SaveChangesAsync();

            Stock stockEntry = new Stock
            {
                Stockid = 0,
                Quantity = product.Quantity,
                Proid = product.Proid,
            };

            _context.Stocks.Add(stockEntry);
            await _context.SaveChangesAsync();

            var options = new JsonSerializerOptions
            {
                ReferenceHandler = ReferenceHandler.Preserve,
            };

            var result = new
            {
                Message = "Product created Successfully",
                Product = product,
                Stock = stockEntry
            };

            var jsonString = JsonSerializer.Serialize(result, options);
            return Content(jsonString, "application/json");
        }


        // DELETE: api/Products/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            if (_context.Products == null)
            {
                return NotFound();
            }
            var product = await _context.Products.FindAsync(id);
            if (product == null)
            {
                return NotFound();
            }

            _context.Products.Remove(product);
            await _context.SaveChangesAsync();

            return Ok();
        }

        private bool ProductExists(int id)
        {
            return (_context.Products?.Any(e => e.Proid == id)).GetValueOrDefault();
        }
    }
}
