using System.Reflection;
using HealthChecks.UI.Client;
using Microsoft.AspNetCore.Diagnostics.HealthChecks;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace Reloaded.Web.Extensions
{
	public static class StartupExtensions
    {
		public static void ConfigureSwaggerDocs(this SwaggerGenOptions options)
        {
			var currentAssembly = Assembly.GetExecutingAssembly();
			
			currentAssembly.GetReferencedAssemblies()
			.Union(new [] { currentAssembly.GetName() })
			.Select(a => Path.Combine(Path.GetDirectoryName(currentAssembly.Location), $"{a.Name!}.xml"))
			.Where(File.Exists)
			.ToList()
			.ForEach(d =>
			{
				options.IncludeXmlComments(d);
			});
		}

		public static WebApplication ConfigureHealtChecks(this WebApplication app)
		{

            app.MapHealthChecks("/health", new HealthCheckOptions
            {
                Predicate = _ => true,
                ResponseWriter = UIResponseWriter.WriteHealthCheckUIResponse
            });

            app.MapHealthChecksUI();

            return app;
		}
	}
}
