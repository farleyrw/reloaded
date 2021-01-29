using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Reloaded.API.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class FirearmsController : ControllerBase
	{
		private readonly ILogger<FirearmsController> _logger;

		public FirearmsController(ILogger<FirearmsController> logger)
		{
			_logger = logger;
		}

		[HttpGet]
		public string Get()
		{
			return "hello world";
		}
	}
}
