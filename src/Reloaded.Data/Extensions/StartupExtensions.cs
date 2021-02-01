using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
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

			return services;
		}
	}
}
