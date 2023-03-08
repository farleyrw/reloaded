using Microsoft.AspNetCore.Mvc;
using Reloaded.Common.Enums;
using Reloaded.Common.Enums.Components;
using Reloaded.Common.Enums.Components.Bullet;
using Reloaded.Common.Enums.Firearms;
using Reloaded.Common.Helpers;
using Reloaded.Common.Models;
using Reloaded.Core.Business.Reloading;

namespace Reloaded.Web.Controllers
{
	[ApiController]
	[Route("api/[controller]")]
	public class ReloadsController : ControllerBase
	{
		private readonly IReloadBusiness reloadBusiness;

		public ReloadsController(IReloadBusiness reloadBusiness)
		{
			this.reloadBusiness = reloadBusiness;
		}

		[HttpGet("list/{accountId:int}")]
		public async Task<IEnumerable<Reload>> GetReloads(int accountId)
		{
			var reloads = await this.reloadBusiness.GetReloads(accountId);

			return reloads;
		}

        [HttpGet("{reloadId:int}")]
        public async Task<Reload> GetReload(int reloadId)
        {
            var reload = await this.reloadBusiness.GetReload(reloadId);

            return reload;
        }

        [HttpGet("firearm/{firearmId:int}")]
		public async Task<IEnumerable<Reload>> GetReloadsForGun(int firearmId)
		{
			var reloads = await this.reloadBusiness.GetReloadsForGun(firearmId);

			return reloads;
		}

		[HttpPost("")]
		public async Task<Reload> SaveReload(Reload reload)
		{
			var savedReload = await this.reloadBusiness.SaveReload(reload);

			return savedReload;
		}

		[HttpPost("result")]
		public async Task<ReloadResult> SaveReloadResult(ReloadResult reloadResult)
		{
			var savedReloadResult = await this.reloadBusiness.SaveReloadResult(reloadResult);

			return savedReloadResult;
		}

		[HttpGet("enums")]
		public IActionResult GetEnums()
		{
			var enums = new
			{
				BrassManufacturers = EnumHelper.Descriptions<BrassManufacturer>(),
				BulletConstructions = EnumHelper.Descriptions<BulletConstruction>(),
				BulletTipTypes = EnumHelper.Descriptions<BulletType>(),
				BulletBaseTypes = EnumHelper.Descriptions<BulletBaseType>(),
				BulletManufacturers = EnumHelper.Descriptions<BulletManufacturer>(),
				Calibers = EnumHelper.Descriptions<Caliber>(),
				Cartridges = EnumHelper.Descriptions<Cartridge>(),
				PrimerTypes = EnumHelper.Descriptions<PrimerType>(),
				PrimerManufacturers = EnumHelper.Descriptions<PrimerManufacturer>(),
				GunPowders = EnumHelper.Descriptions<GunPowder>(),
				FirearmTypes = EnumHelper.Descriptions<FirearmType>()
			};

			return Ok(enums);
		}
	}
}
