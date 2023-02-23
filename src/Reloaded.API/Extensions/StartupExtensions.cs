using System;
using System.IO;
using System.Linq;
using System.Reflection;
using HealthChecks.UI.Client;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics.HealthChecks;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.DependencyInjection;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace Reloaded.API.Extensions
{
    public static class StartupExtensions
    {
		public static void ConfigureHealthCheck(this IEndpointRouteBuilder endpoints)
		{
			endpoints.MapHealthChecks("/health", new HealthCheckOptions
			{
				ResponseWriter = UIResponseWriter.WriteHealthCheckUIResponse
			});
		}

		public static void ConfigureSwaggerDocs(this SwaggerGenOptions options)
        {
			var currentAssembly = Assembly.GetExecutingAssembly();
			
			currentAssembly.GetReferencedAssemblies()
			.Union(new AssemblyName[] { currentAssembly.GetName() })
			.Select(a => Path.Combine(Path.GetDirectoryName(currentAssembly.Location), $"{a.Name}.xml"))
			.Where(f => File.Exists(f))
			.ToList()
			.ForEach(d =>
			{
				options.IncludeXmlComments(d);
			});
		}
	}
}
