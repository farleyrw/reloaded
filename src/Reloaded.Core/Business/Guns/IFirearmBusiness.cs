using System.Collections.Generic;
using System.Threading.Tasks;
using Reloaded.Common.Models;

namespace Reloaded.Core.Business.Guns
{
	public interface IFirearmBusiness
	{
		Task<IEnumerable<Firearm>> GetFirearms(int accountId);
	}
}
