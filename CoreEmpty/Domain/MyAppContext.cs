using CoreEmpty.Domain.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoreEmpty.Domain
{
    public class MyAppContext: IdentityDbContext<ApplicationUser>
    {
        public MyAppContext(DbContextOptions opt): base(opt)
        {

        }

        public DbSet<Department> Departments { get; set; }
        public DbSet<ProdUnit> ProdUnits { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.HasPostgresExtension("postgis");
            base.OnModelCreating(builder);
        }
    }
}
