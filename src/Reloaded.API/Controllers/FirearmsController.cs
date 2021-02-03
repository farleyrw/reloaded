using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Reloaded.Common.Models;
using Reloaded.Core.Business.Guns;

namespace Reloaded.API.Controllers
{
	[ApiController]
	[Route("api/[controller]")]
	public class FirearmsController : ControllerBase
	{
		private readonly IFirearmBusiness firearmBusiness;

		public FirearmsController(IFirearmBusiness firearmBusiness)
		{
			this.firearmBusiness = firearmBusiness;
		}

		[HttpGet("{firearmId:int}")]
		public async Task<Firearm> Get(int firearmId)
		{
			var firearm = await this.firearmBusiness.GetFirearm(firearmId);

			return firearm;
		}

		[HttpGet("list/{accountId:int}")]
		public async Task<IEnumerable<Firearm>> GetList(int accountId)
		{
			var firearms = await this.firearmBusiness.GetFirearms(accountId);

			return firearms;
		}

		[HttpPost]
		public async Task<Firearm> SaveFirearm(Firearm firearm)
		{
			var savedFirearm = await this.firearmBusiness.SaveFirearm(firearm);

			return savedFirearm;
		}
	}
}
