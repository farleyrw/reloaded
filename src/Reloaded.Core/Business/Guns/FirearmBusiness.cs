using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Reloaded.Common.Models;
using Reloaded.Data.Repositories;

namespace Reloaded.Core.Business.Guns
{
	public class FirearmBusiness : IFirearmBusiness
	{
		private readonly IFirearmRepository firearmRepository;
		private readonly ILogger<FirearmBusiness> logger;

		public FirearmBusiness(IFirearmRepository firearmRepository, ILogger<FirearmBusiness> logger)
		{
			this.firearmRepository = firearmRepository;
			this.logger = logger;
		}
		public Task<Firearm> GetFirearm(int firearmId)
		{
			logger.LogInformation("loading firearm id: {firearmId}", firearmId);
			return this.firearmRepository.GetFirearm(firearmId);
		}

		public Task<IEnumerable<Firearm>> GetFirearms(int accountId)
		{
			return this.firearmRepository.GetFirearms(accountId);
		}

		public Task<Firearm> SaveFirearm(Firearm firearm)
		{
			return this.firearmRepository.SaveFirearm(firearm);
		}
	}
}
