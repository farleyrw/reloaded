using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Reloaded.Common.Enums.Components;
using Reloaded.Common.Models.Components;

namespace Reloaded.Common.Models
{
	[Table("handload")]
	public class Handload : BaseModel
	{
		[Key]
		public int HandloadId { get; set; }

		[Required]
		public int FirearmId { get; set; }

		[Column("powderType")]
		public GunPowder Powder { get; set; } = GunPowder.None;

		[Required]
		[Column("powderChargeGr")]
		public double PowderCharge { get; set; }

		[Required]
		[Column("seatingDepthIn")]
		public double SeatingDepth { get; set; }

		public Primer Primer { get; set; } = new Primer();

		public Brass Casing { get; set; } = new Brass();

		public Bullet Bullet { get; set; } = new Bullet();

		public List<HandloadResult> Results { get; set; } = new List<HandloadResult>();
    }
}