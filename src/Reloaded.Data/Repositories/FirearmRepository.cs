using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Reloaded.Common.Models;
using Reloaded.Data.Contexts;

namespace Reloaded.Data.Repositories
{
	public class FirearmRepository : IFirearmRepository
	{
		private readonly FirearmContext firearmContext;
		private readonly ILogger<FirearmRepository> logger;

		public FirearmRepository(FirearmContext firearmContext, ILogger<FirearmRepository> logger)
		{
			this.firearmContext = firearmContext;
			this.logger = logger;
		}

		public async Task<Firearm> GetFirearm(int firearmId)
		{
			logger.LogInformation("lookup firearm id: {firearmId}", firearmId);
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
