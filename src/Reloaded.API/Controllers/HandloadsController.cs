using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Reloaded.Common.Models;
using Reloaded.Core.Business.Reloading;

namespace Reloaded.API.Controllers
{
	[ApiController]
	[Route("api/[controller]")]
	public class HandloadsController : ControllerBase
	{
		private readonly IHandloadBusiness handloadBusiness;

		public HandloadsController(IHandloadBusiness handloadBusiness)
		{
			this.handloadBusiness = handloadBusiness;
		}

		[HttpGet("{accountId:int}")]
		public async Task<IEnumerable<Handload>> GetHandloads(int accountId)
		{
			var handloads = await this.handloadBusiness.GetHandloads(accountId);

			return handloads;
		}

		[HttpGet("firearm/{firearmId:int}")]
		public async Task<IEnumerable<Handload>> GetHandloadsForGun(int firearmId)
		{
			var handloads = await this.handloadBusiness.GetHandloadsForGun(firearmId);

			return handloads;
		}

		[HttpPost("")]
		public async Task<Handload> SaveHandload(Handload handload)
		{
			var savedHandload = await this.handloadBusiness.SaveHandload(handload);

			return savedHandload;
		}

		[HttpPost("result")]
		public async Task<HandloadResult> SaveHandloadResult(HandloadResult handloadResult)
		{
			var savedHandloadResult = await this.handloadBusiness.SaveHandloadResult(handloadResult);

			return savedHandloadResult;
		}
	}
}
