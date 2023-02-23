using Microsoft.AspNetCore.Mvc;
using Reloaded.Common.Enums;
using Reloaded.Common.Enums.Firearms;
using Reloaded.Common.Helpers;
using Reloaded.Common.Models;
using Reloaded.Core.Business.Guns;

namespace Reloaded.Web.Controllers
{
	[ApiController]
	[Route("api/[controller]")]
	public class FirearmsController : ControllerBase
	{
		private readonly IFirearmBusiness firearmBusiness;
		private readonly ILogger<FirearmsController> logger;

		public FirearmsController(IFirearmBusiness firearmBusiness, ILogger<FirearmsController> logger)
		{
			this.firearmBusiness = firearmBusiness;
			this.logger = logger;
		}

		[HttpGet("{firearmId:int}")]
		public async Task<Firearm> Get(int firearmId)
		{
			var firearm = await this.firearmBusiness.GetFirearm(firearmId);

			logger.LogWarning("{@firearm}", firearm);
			
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

		[HttpGet("enums")]
		public IActionResult GetEnums()
		{
			var enums = new
			{
				Cartidges = EnumHelper.Descriptions<Cartridge>(),
				Types = EnumHelper.Descriptions<FirearmType>()
			};

			return Ok(enums);
		}
	}
}
