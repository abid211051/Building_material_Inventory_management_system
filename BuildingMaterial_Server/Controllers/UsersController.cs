using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BuildingMaterial.Models;
using System.Data;

namespace BuildingMaterial.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly BuildingMaterialContext _context;

        public UsersController(BuildingMaterialContext context)
        {
            _context = context;
        }

        [HttpPost("Login")]
        public async Task<ActionResult<User>> Login(User user)
        {
            if (_context.Users == null)
            {
                return NotFound(new
                {
                    Message = "User not found",
                    Success = false
                });
            }
            var dbuser = await _context.Users.FindAsync(user.Username);
            if (dbuser == null)
            {
                return NotFound(new
                {
                    Message = "User not found",
                    Success = false
                });
            }
            else
            {
                if (dbuser.Userpass == user.Userpass)
                {
                    return Ok(new
                    {
                        Message = "Login successful",
                        Role = dbuser.Userrole,
                        Success = true
                    });
                }
                else
                {
                    return Unauthorized(new
                    {
                        Message = "Incorrect password",
                        Success = false
                    }
                    );
                }
            }
        }
        private bool UserExists(string id)
        {
            return (_context.Users?.Any(e => e.Username == id)).GetValueOrDefault();
        }
    }
}
