using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Reloaded.Common.Models;
using Reloaded.Data.Contexts;

namespace Reloaded.Data.Repositories
{
	public class HandloadRepository : IHandloadRepository
	{
		private readonly HandloadContext context;

		public HandloadRepository(HandloadContext context)
		{
			this.context = context;
		}

		public async Task<IEnumerable<Handload>> GetHandloads(int accountId)
		{
			var handloads = await this.context.Handloads.Where(h => h.AccountId == accountId)
				.Include(h => h.Results)
				.ToListAsync();

			return handloads;
		}

		public async Task<IEnumerable<Handload>> GetHandloadsForGun(int firearmId)
		{
			var handloads = await this.context.Handloads.Where(h => h.FirearmId == firearmId)
				.Include(h => h.Results)
				.ToListAsync();

			return handloads;
		}

		public async Task<Handload> SaveHandload(Handload handload)
		{
			this.context.Handloads.Update(handload);

			await this.context.SaveChangesAsync();

			return handload;
		}

		public async Task<HandloadResult> SaveHandloadResult(HandloadResult handloadResult)
		{
			this.context.HandloadResults.Update(handloadResult);

			await this.context.SaveChangesAsync();

			return handloadResult;
		}
	}
}
