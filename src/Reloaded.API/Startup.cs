using System.Diagnostics.CodeAnalysis;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using NLog;
using NLog.Extensions.Logging;
using NLog.Web;
using Reloaded.API.Extensions;
using Reloaded.Core.Extensions;

namespace Reloaded.API
{
	[ExcludeFromCodeCoverage]
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
			services.ConfigureCoreServices(Configuration);

			services.AddHealthChecks().AddSqlServer(Configuration.GetConnectionString("Reloaded"), name: "Reloaded SQL Connection");
			services.AddHealthChecksUI().AddInMemoryStorage();

			services.AddCors();

			services.AddControllers().AddJsonOptions(opts =>
			{
				opts.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
			});

			services.AddSwaggerGen(c =>
			{
				c.SwaggerDoc("v1", new OpenApiInfo { Title = "reloaded", Version = "v1" });
				c.ConfigureSwaggerDocs();
			});
		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
		{
			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();

				app.UseSwagger();
				app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "reloaded v1"));
			}

			app.UseHttpsRedirection();

			app.UseRouting();

			app.UseAuthorization();
			app.UseCors(policy => policy.WithOrigins("http://localhost:4200").AllowAnyHeader().AllowAnyMethod());

			app.UseEndpoints(endpoints =>
			{
				endpoints.MapControllers();
				endpoints.ConfigureHealthCheck();
				endpoints.MapHealthChecksUI();
			});

			LogManager.Configuration = new NLogLoggingConfiguration(Configuration.GetSection("NLog"));

			var logger = LogManager.Setup()
					   .LoadConfigurationFromAppSettings()
					   .GetCurrentClassLogger();

			logger.Info("Startin' up!");
		}
	}
}
