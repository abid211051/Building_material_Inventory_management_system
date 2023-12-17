using System;
using System.Collections.Generic;

namespace BuildingMaterial.Models;

public partial class Supplier
{
    public int Supid { get; set; }

    public string Supcode { get; set; } = null!;

    public string? Supname { get; set; }

    public string? Supmobile { get; set; }
}
