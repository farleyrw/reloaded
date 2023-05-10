using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Reloaded.Data.Contexts;
using Reloaded.Data.Initialization;
using Reloaded.Data.Interceptors;
using Reloaded.Data.Repositories;

namespace Reloaded.Data.Extensions
{
	public static class StartupExtensions
	{
		public static IServiceCollection ConfigureDataServices(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddSingleton<UpdateAuditableEntityInterceptor>();

            services.AddTransient<DataSeeder>();

            services.AddTransient<IFirearmRepository, FirearmRepository>();
            services.AddTransient<IReloadRepository, ReloadRepository>();

            services.AddDbContext<FirearmContext>(ConfigureContext(configuration));
            services.AddDbContext<ReloadContext>(ConfigureContext(configuration));
            services.AddDbContext<UserAccountContext>(ConfigureContext(configuration));

            return services;
        }

        private static Action<IServiceProvider, DbContextOptionsBuilder> ConfigureContext(IConfiguration configuration)
        {
            return (sp, optionsBuilder) =>
            {
                var interceptor = sp.GetService<UpdateAuditableEntityInterceptor>();

                optionsBuilder.UseSqlServer(configuration.GetConnectionString("Reloaded"))
                    .AddInterceptors(interceptor);
            };
        }

        public static void ConfigureDbMigrations(this IServiceProvider services)
		{
            using var scope = services.GetService<IServiceScopeFactory>().CreateScope();

			var dataSeeder = scope.ServiceProvider.GetService<DataSeeder>();

			dataSeeder.Seed();
		}
	}
}
