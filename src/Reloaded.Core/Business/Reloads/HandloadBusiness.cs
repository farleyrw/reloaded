using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Reloaded.Common.Models;

namespace Reloaded.Core.Business.Reloads
{
	public class HandloadBusiness : IHandloadBusiness
	{
		public Task<IEnumerable<HandloadResult>> GetHandloadResults(int firearmId)
		{
			return null;
		}
	}
}
