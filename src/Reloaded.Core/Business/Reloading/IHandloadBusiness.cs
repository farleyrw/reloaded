using System.Collections.Generic;
using System.Threading.Tasks;
using Reloaded.Common.Models;

namespace Reloaded.Core.Business.Reloading
{
	public interface IHandloadBusiness
	{
		Task<IEnumerable<Handload>> GetHandloads(int accountId);
		Task<IEnumerable<Handload>> GetHandloadsForGun(int firearmId);
		Task<Handload> SaveHandload(Handload handload);
		Task<HandloadResult> SaveHandloadResult(HandloadResult handloadResult);
	}
}
