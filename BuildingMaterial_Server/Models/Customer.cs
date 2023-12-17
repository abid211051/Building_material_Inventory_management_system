using System;
using System.Collections.Generic;

namespace BuildingMaterial.Models;

public partial class Customer
{
    public int Cusid { get; set; }

    public string? Customername { get; set; }

    public string? Customerphone { get; set; }

    public virtual ICollection<Sale> Sales { get; set; } = new List<Sale>();
}
