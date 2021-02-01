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

		public Task<IEnumerable<Firearm>> GetFirearms(int accountId)
		{
			return null;
		}
	}
}
