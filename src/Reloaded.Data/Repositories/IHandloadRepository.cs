using System.Collections.Generic;
using System.Threading.Tasks;
using Reloaded.Common.Models;

namespace Reloaded.Data.Repositories
{
	public interface IHandloadRepository
	{
        Task<Handload> GetReload(int reloadId);
        Task<IEnumerable<Handload>> GetHandloads(int accountId);
		Task<IEnumerable<Handload>> GetHandloadsForGun(int firearmId);
		Task<Handload> SaveHandload(Handload handload);
		Task<HandloadResult> SaveHandloadResult(HandloadResult handloadResult);
	}
}
