using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Reloaded.Common.Enums.Components;
using Reloaded.Common.Models.Components;

namespace Reloaded.Common.Models
{
	public class Handload : IBaseModel
	{
		[Key]
		public int HandloadId { get; set; }

		public int AccountId { get; set; }

		public GunPowder Powder { get; set; } = GunPowder.None;

		[Required]
		public double PowderCharge { get; set; }

		public Primer Primer { get; set; } = new Primer();

		public Brass Casing { get; set; } = new Brass();

		public Bullet Bullet { get; set; } = new Bullet();

		[Required]
		public double SeatingDepth { get; set; }

		[Required]
		public int FirearmId { get; set; }

		public List<HandloadResult> Results { get; set; } = new List<HandloadResult>();
	}
}