using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Reloaded.Data.Contexts;
using Reloaded.Data.Repositories;

namespace Reloaded.Data.Extensions
{
	public static class StartupExtensions
	{
		public static IServiceCollection ConfigureDataServices(this IServiceCollection services, IConfiguration configuration)
		{
			services.AddTransient<IFirearmRepository, FirearmRepository>();
			services.AddTransient<IHandloadRepository, HandloadRepository>();
			services.AddTransient<IHandloadResultRepositoy, HandloadResultRepository>();

			services.AddDbContext<FirearmContext>(options => options.UseSqlServer(configuration.GetConnectionString("Reloaded")));

			return services;
		}

		private static IServiceCollection ConfigureDbMigrations(this IServiceCollection serviceCollection)
		{
			//using (var context = new FirearmContext())
			//{
			//	context.Database.EnsureCreated();
			//}

			return serviceCollection;
		}
	}
}
