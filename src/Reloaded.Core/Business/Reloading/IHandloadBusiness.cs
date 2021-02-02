using System.Collections.Generic;
using System.Threading.Tasks;
using Reloaded.Common.Models;

namespace Reloaded.Core.Business.Reloading
{
	public interface IHandloadBusiness
	{
		Task<IEnumerable<HandloadResult>> GetHandloadResults(int firearmId);
	}
}
