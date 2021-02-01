using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Reloaded.Common.Models;

namespace Reloaded.Core.Business.Guns
{
	public class FirearmBusiness : IFirearmBusiness
	{
		public Task<IEnumerable<Firearm>> GetFirearms(int accountId)
		{
			return null;
		}
	}
}
