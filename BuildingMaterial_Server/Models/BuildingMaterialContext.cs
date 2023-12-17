using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace BuildingMaterial.Models;

public partial class BuildingMaterialContext : DbContext
{
    public BuildingMaterialContext()
    {
    }

    public BuildingMaterialContext(DbContextOptions<BuildingMaterialContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Customer> Customers { get; set; }

    public virtual DbSet<Product> Products { get; set; }

    public virtual DbSet<Sale> Sales { get; set; }

    public virtual DbSet<Stock> Stocks { get; set; }

    public virtual DbSet<Supplier> Suppliers { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {

    }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Customer>(entity =>
        {
            entity.HasKey(e => e.Cusid).HasName("PK__customer__BA95607B6D99771B");

            entity.ToTable("customers");

            entity.Property(e => e.Cusid).HasColumnName("cusid");
            entity.Property(e => e.Customername)
                .HasMaxLength(45)
                .IsUnicode(false)
                .HasColumnName("customername");
            entity.Property(e => e.Customerphone)
                .HasMaxLength(11)
                .IsUnicode(false)
                .HasColumnName("customerphone");
        });

        modelBuilder.Entity<Product>(entity =>
        {
            entity.HasKey(e => e.Proid).HasName("PK__products__5BBAE2CD310A39FC");

            entity.ToTable("products");

            entity.Property(e => e.Proid).HasColumnName("proid");
            entity.Property(e => e.Brand)
                .HasMaxLength(45)
                .IsUnicode(false)
                .HasColumnName("brand");
            entity.Property(e => e.Costprice).HasColumnName("costprice");
            entity.Property(e => e.Productname)
                .HasMaxLength(45)
                .IsUnicode(false)
                .HasColumnName("productname");
            entity.Property(e => e.Sellprice).HasColumnName("sellprice");
        });

        modelBuilder.Entity<Sale>(entity =>
        {
            entity.HasKey(e => e.Saleid).HasName("PK__sales__FAEFF92D2FA29BA1");

            entity.ToTable("sales");

            entity.Property(e => e.Saleid).HasColumnName("saleid");
            entity.Property(e => e.Cusid).HasColumnName("cusid");
            entity.Property(e => e.Proid).HasColumnName("proid");
            entity.Property(e => e.Saleprice).HasColumnName("saleprice");
            entity.Property(e => e.Salequantity).HasColumnName("salequantity");

            entity.HasOne(d => d.Cus).WithMany(p => p.Sales)
                .HasForeignKey(d => d.Cusid)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName("FK__sales__cusid");

            entity.HasOne(d => d.Pro).WithMany(p => p.Sales)
                .HasForeignKey(d => d.Proid)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName("FK__sales__proid");
        });

        modelBuilder.Entity<Stock>(entity =>
        {
            entity.HasKey(e => e.Stockid).HasName("PK__stocks__CBA093EBF84CB51A");

            entity.ToTable("stocks");

            entity.Property(e => e.Stockid).HasColumnName("stockid");
            entity.Property(e => e.Proid).HasColumnName("proid");
            entity.Property(e => e.Quantity).HasColumnName("quantity");

            entity.HasOne(d => d.Pro).WithMany(p => p.Stocks)
                .HasForeignKey(d => d.Proid)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName("FK__stocks__proid");
        });

        modelBuilder.Entity<Supplier>(entity =>
        {
            entity.HasKey(e => e.Supid).HasName("PK__supplier__B4F735BA91D13913");

            entity.ToTable("suppliers");

            entity.HasIndex(e => e.Supcode, "UQ__supplier__21377B89E5E065DC").IsUnique();

            entity.Property(e => e.Supid).HasColumnName("supid");
            entity.Property(e => e.Supcode)
                .HasMaxLength(45)
                .IsUnicode(false)
                .HasColumnName("supcode");
            entity.Property(e => e.Supmobile)
                .HasMaxLength(11)
                .IsUnicode(false)
                .HasColumnName("supmobile");
            entity.Property(e => e.Supname)
                .HasMaxLength(45)
                .IsUnicode(false)
                .HasColumnName("supname");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.Username).HasName("PK__users__F3DBC5730FFEBBE7");

            entity.ToTable("users");

            entity.Property(e => e.Username)
                .HasMaxLength(45)
                .IsUnicode(false)
                .HasColumnName("username");
            entity.Property(e => e.Useremail)
                .HasMaxLength(45)
                .IsUnicode(false)
                .HasColumnName("useremail");
            entity.Property(e => e.Userpass)
                .HasMaxLength(45)
                .IsUnicode(false)
                .HasColumnName("userpass");
            entity.Property(e => e.Userrole)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasDefaultValueSql("('admin')")
                .HasColumnName("userrole");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
