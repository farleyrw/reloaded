using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Reloaded.Core.Business.Guns;
using Reloaded.Core.Business.Reloads;
using Reloaded.Data.Extensions;

namespace Reloaded.Core.Extensions
{
	public static class StartupExtensions
	{
		public static IServiceCollection ConfigureCoreServices(this IServiceCollection services, IConfiguration configuration)
		{
			services.AddTransient<IHandloadBusiness, HandloadBusiness>();
			services.AddTransient<IFirearmBusiness, FirearmBusiness>();

			services.ConfigureDataServices(configuration);

			return services;
		}
	}
}
