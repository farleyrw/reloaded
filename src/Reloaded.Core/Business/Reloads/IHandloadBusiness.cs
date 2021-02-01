using System.Collections.Generic;
using System.Threading.Tasks;
using Reloaded.Common.Models;

namespace Reloaded.Core.Business.Reloads
{
	public interface IHandloadBusiness
	{
		Task<IEnumerable<HandloadResult>> GetHandloadResults(int firearmId);
	}
}
