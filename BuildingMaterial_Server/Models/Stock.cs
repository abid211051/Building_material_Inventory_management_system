using System;
using System.Collections.Generic;

namespace BuildingMaterial.Models;

public partial class Stock
{
    public int Stockid { get; set; }

    public int Quantity { get; set; }

    public int? Proid { get; set; }

    public virtual Product? Pro { get; set; }
}
