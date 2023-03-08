using System.Collections.Generic;
using System.Threading.Tasks;
using Reloaded.Common.Models;
using Reloaded.Data.Repositories;

namespace Reloaded.Core.Business.Reloading
{
	public class ReloadBusiness : IReloadBusiness
	{
		private readonly IReloadRepository reloadRepository;

		public ReloadBusiness(IReloadRepository reloadRepository)
		{
			this.reloadRepository = reloadRepository;
		}

        public Task<Reload> GetReload(int reloadId)
        {
            return this.reloadRepository.GetReload(reloadId);
        }

        public Task<IEnumerable<Reload>> GetReloads(int accountId)
		{
			return this.reloadRepository.GetReloads(accountId);
		}

		public Task<IEnumerable<Reload>> GetReloadsForGun(int firearmId)
		{
			return this.reloadRepository.GetReloadsForGun(firearmId);
		}

		public Task<Reload> SaveReload(Reload reload)
		{
			return this.reloadRepository.SaveReload(reload);
		}

		public Task<ReloadResult> SaveReloadResult(ReloadResult reloadResult)
		{
			return this.reloadRepository.SaveReloadResult(reloadResult);
		}
	}
}
