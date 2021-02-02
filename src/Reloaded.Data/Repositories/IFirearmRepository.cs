using System.Collections.Generic;
using System.Threading.Tasks;
using Reloaded.Common.Models;

namespace Reloaded.Data.Repositories
{
	public interface IFirearmRepository
	{
		Task<Firearm> GetFirearm(int firearmId);

		Task<IEnumerable<Firearm>> GetFirearms(int accountId);

		Task<Firearm> SaveFirearm(Firearm firearm);
	}
}
