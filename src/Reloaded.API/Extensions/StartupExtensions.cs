using System.Linq;
using System.Net.Mime;
using System.Text.Json;
using HealthChecks.UI.Client;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics.HealthChecks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;

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

			endpoints.MapHealthChecks("/healthcheck-details", new HealthCheckOptions
			{
				ResponseWriter = async (context, report) =>
				{
					var result = JsonSerializer.Serialize(
						new
						{
							status = report.Status.ToString(),
							totalDurationSeconds = report.TotalDuration.TotalSeconds,
							entries = report.Entries.Select(e => new
							{
								key = e.Key,
								status = e.Value.Status.ToString(),
								description = e.Value.Description,
								durationSeconds = e.Value.Duration.TotalSeconds,
								data = e.Value.Data
							})
						});

					context.Response.ContentType = MediaTypeNames.Application.Json;
					   
					await context.Response.WriteAsync(result);
				}
			});
		}
	}
}
