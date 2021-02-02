using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Reloaded.Common.Models;
using Reloaded.Data.Repositories;

namespace Reloaded.Core.Business.Guns
{
	public class FirearmBusiness : IFirearmBusiness
	{
		private readonly IFirearmRepository firearmRepository;

		public FirearmBusiness(IFirearmRepository firearmRepository)
		{
			this.firearmRepository = firearmRepository;
		}
		public Task<Firearm> GetFirearm(int firearmId)
		{
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
