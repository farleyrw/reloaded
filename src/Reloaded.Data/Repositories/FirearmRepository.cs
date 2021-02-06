using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Reloaded.Common.Models;
using Reloaded.Data.Contexts;

namespace Reloaded.Data.Repositories
{
	public class FirearmRepository : IFirearmRepository
	{
		private readonly FirearmContext firearmContext;

		public FirearmRepository(FirearmContext firearmContext)
		{
			this.firearmContext = firearmContext;
		}

		public async Task<Firearm> GetFirearm(int firearmId)
		{
			return await this.firearmContext.FindAsync<Firearm>(firearmId);
		}

		public async Task<IEnumerable<Firearm>> GetFirearms(int accountId)
		{
			return await this.firearmContext.Firearms.Where(f => f.AccountId == accountId).ToListAsync();
		}

		public async Task<Firearm> SaveFirearm(Firearm firearm)
		{
			this.firearmContext.Firearms.Update(firearm);

			await this.firearmContext.SaveChangesAsync();
			
			return firearm;
		}
	}
}
