using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Reloaded.Common.Models;
using Reloaded.Data.Contexts;

namespace Reloaded.Data.Repositories
{
    public class ReloadRepository : IReloadRepository
	{
		private readonly ReloadContext context;

		public ReloadRepository(ReloadContext context)
		{
			this.context = context;
		}

        public async Task<Reload> GetReload(int reloadId)
        {
			var reload = await this.context.Reloads
				.FirstOrDefaultAsync(reload => reload.ReloadId == reloadId);

            return reload;
        }

        public async Task<IEnumerable<Reload>> GetReloads(int accountId)
		{
			var reloads = await this.context.Reloads
				.Where(reload => reload.AccountId == accountId)
				.Include(reload => reload.Results)
				.ToListAsync();

			return reloads;
		}

		public async Task<IEnumerable<Reload>> GetReloadsForGun(int firearmId)
		{
			var firearmMaps = this.context.ReloadFirearmMaps
				.Where(map => map.FirearmId == firearmId)
				.Select(map => map.ReloadId);

            var reloads = await this.context.Reloads.Where(reload => firearmMaps.Contains(reload.ReloadId))
				.Include(reload => reload.Results)
				.ToListAsync();

			return reloads;
		}

        public async Task<Reload> SaveReload(Reload reload)
		{
			this.context.Reloads.Update(reload);

			await this.context.SaveChangesAsync();

			return reload;
		}

		public async Task<ReloadResult> SaveReloadResult(ReloadResult reloadResult)
		{
			this.context.ReloadResults.Update(reloadResult);

			await this.context.SaveChangesAsync();

			return reloadResult;
		}
	}
}
