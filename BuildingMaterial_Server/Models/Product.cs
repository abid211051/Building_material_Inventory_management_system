using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace BuildingMaterial.Models;

public partial class Product
{
    public int Proid { get; set; }

    public string? Productname { get; set; }

    public float Sellprice { get; set; }

    public float Costprice { get; set; }

    public string? Brand { get; set; }
    [NotMapped]
    public int Quantity { get; set; }

    public virtual ICollection<Sale> Sales { get; set; } = new List<Sale>();

    public virtual ICollection<Stock> Stocks { get; set; } = new List<Stock>();
}
