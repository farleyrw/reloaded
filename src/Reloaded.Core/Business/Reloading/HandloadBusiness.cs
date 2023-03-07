using System.Collections.Generic;
using System.Threading.Tasks;
using Reloaded.Common.Models;
using Reloaded.Data.Repositories;

namespace Reloaded.Core.Business.Reloading
{
	public class HandloadBusiness : IHandloadBusiness
	{
		private readonly IHandloadRepository handloadRepository;

		public HandloadBusiness(IHandloadRepository handloadRepository)
		{
			this.handloadRepository = handloadRepository;
		}

        public Task<Handload> GetReload(int reloadId)
        {
            return this.handloadRepository.GetReload(reloadId);
        }

        public Task<IEnumerable<Handload>> GetHandloads(int accountId)
		{
			return this.handloadRepository.GetHandloads(accountId);
		}

		public Task<IEnumerable<Handload>> GetHandloadsForGun(int firearmId)
		{
			return this.handloadRepository.GetHandloadsForGun(firearmId);
		}

		public Task<Handload> SaveHandload(Handload handload)
		{
			return this.handloadRepository.SaveHandload(handload);
		}

		public Task<HandloadResult> SaveHandloadResult(HandloadResult handloadResult)
		{
			return this.handloadRepository.SaveHandloadResult(handloadResult);
		}
	}
}
