using System;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Reloaded.Core.Business.Guns;
using Reloaded.Core.Business.Reloading;
using Reloaded.Data.Extensions;

namespace Reloaded.Core.Extensions
{
    public static class StartupExtensions
	{
		public static IServiceCollection ConfigureCoreServices(this IServiceCollection services, IConfiguration configuration)
		{
			services.AddTransient<IReloadBusiness, ReloadBusiness>();
			services.AddTransient<IFirearmBusiness, FirearmBusiness>();

			services.ConfigureDataServices(configuration);

			return services;
		}

		public static IServiceProvider ConfigureCore(this IServiceProvider services)
		{
			services.ConfigureDbMigrations();

			return services;
        }
	}
}
