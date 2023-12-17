using System;
using System.Collections.Generic;

namespace BuildingMaterial.Models;

public partial class Sale
{
    public int Saleid { get; set; }

    public int? Salequantity { get; set; }

    public int? Cusid { get; set; }

    public float? Saleprice { get; set; }

    public int? Proid { get; set; }

    public virtual Customer? Cus { get; set; }

    public virtual Product? Pro { get; set; }
}
