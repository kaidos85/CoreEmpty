using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CoreEmpty.Domain;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using CoreEmpty.Domain.Entities;
using Microsoft.AspNetCore.Identity;

namespace CoreEmpty
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            var constr = Configuration.GetConnectionString("DefaultConnection");
            services.AddDbContext<MyAppContext>(opt => opt.UseNpgsql(constr, o=>o.UseNetTopologySuite()));

            //services.AddIdentity<ApplicationUser, IdentityRole>()
            //        .AddEntityFrameworkStores<MyAppContext>()
            //        .Add
            //services.c
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseWebpackDevMiddleware();
            }
            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.UseMvc();
        }
    }
}
