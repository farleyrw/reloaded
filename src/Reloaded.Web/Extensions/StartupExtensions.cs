using HealthChecks.UI.Client;
using Microsoft.AspNetCore.Diagnostics.HealthChecks;
using Reloaded.Core.Extensions;

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

        public static WebApplication ConfigureCore(this WebApplication app)
        {
            app.Services.ConfigureCore();

            return app;
        }
	}
}
