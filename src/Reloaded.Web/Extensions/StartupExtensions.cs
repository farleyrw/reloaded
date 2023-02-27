using HealthChecks.UI.Client;
using Microsoft.AspNetCore.Diagnostics.HealthChecks;

namespace Reloaded.Web.Extensions
{
    public static class StartupExtensions
    {
		public static WebApplication ConfigureHealthChecks(this WebApplication app)
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
