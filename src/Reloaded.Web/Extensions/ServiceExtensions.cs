using System.Reflection;
using System.Text.Json.Serialization;
using Microsoft.OpenApi.Models;
using NLog.Web;
using Reloaded.Core.Extensions;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace Reloaded.Web.Extensions
{
    public static class ServiceExtensions
    {
		public static void ConfigureWebServices(this WebApplicationBuilder builder)
        {
            var services = builder.Services;

            services.AddControllersWithViews();

            services.ConfigureCoreServices(builder.Configuration);

            services.AddCors();

            builder.Services.AddHealthChecks().AddSqlServer(builder.Configuration.GetConnectionString("Reloaded"), name: "Reloaded DB");
            builder.Services.AddHealthChecksUI().AddInMemoryStorage();

            services.AddControllers().AddJsonOptions(opts =>
            {
                opts.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
            });

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "reloaded", Version = "v1" });
                c.ConfigureSwaggerDocs();
            });

            builder.Host.UseNLog(new NLogAspNetCoreOptions { RemoveLoggerFactoryFilter = false });

        }

        public static void ConfigureSwaggerDocs(this SwaggerGenOptions options)
        {
            var currentAssembly = Assembly.GetExecutingAssembly();

            currentAssembly.GetReferencedAssemblies()
            .Union(new[] { currentAssembly.GetName() })
            .Select(a => Path.Combine(Path.GetDirectoryName(currentAssembly.Location), $"{a.Name!}.xml"))
            .Where(File.Exists)
            .ToList()
            .ForEach(d =>
            {
                options.IncludeXmlComments(d);
            });
        }
    }
}
