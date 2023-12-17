using System;
using System.Collections.Generic;

namespace BuildingMaterial.Models;

public partial class User
{
    public string Username { get; set; } = null!;

    public string? Useremail { get; set; }

    public string? Userpass { get; set; }

    public string? Userrole { get; set; }
}
