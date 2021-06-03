using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Reloaded.Common.Enums;
using Reloaded.Common.Enums.Components.Bullet;

namespace Reloaded.Common.Models.Components
{
	[ComplexType]
	public class Bullet
	{
		[Required]
		[Column("bulletWeightGr")]
		public int Weight { get; set; }

		[Column("bulletBrand")]
		public BulletManufacturer Brand { get; set; } = BulletManufacturer.Other;

		[Column("bulletConstruction")]
		public BulletConstruction Construction { get; set; } = BulletConstruction.Other;

		[Column("bulletType")]
		public BulletType Type { get; set; } = BulletType.Other;

		[Column("bulletBaseType")]
		public BulletBaseType BaseType { get; set; } = BulletBaseType.Other;

		[Column("bulletCaliber")]
		public Caliber Caliber { get; set; } = Caliber.Other;
	}
}