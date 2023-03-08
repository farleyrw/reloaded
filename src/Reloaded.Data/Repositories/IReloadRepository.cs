using System.Collections.Generic;
using System.Threading.Tasks;
using Reloaded.Common.Models;

namespace Reloaded.Data.Repositories
{
	public interface IReloadRepository
	{
        Task<Reload> GetReload(int reloadId);
        Task<IEnumerable<Reload>> GetReloads(int accountId);
		Task<IEnumerable<Reload>> GetReloadsForGun(int firearmId);
		Task<Reload> SaveReload(Reload reload);
		Task<ReloadResult> SaveReloadResult(ReloadResult reloadResult);
	}
}
