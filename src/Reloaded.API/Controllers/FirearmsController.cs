using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Reloaded.Core.Business.Guns;

namespace Reloaded.API.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class FirearmsController : ControllerBase
	{
		private readonly IFirearmBusiness firearmBusiness;

		public FirearmsController(IFirearmBusiness firearmBusiness)
		{
			this.firearmBusiness = firearmBusiness;
		}

		[HttpGet]
		public string Get()
		{
			return "hello world";
		}
	}
}
