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
		public BulletManufacturer Brand { get; set; }

		[Column("bulletConstruction")]
		public BulletConstruction Construction { get; set; }

		[Column("bulletType")]
		public BulletType Type { get; set; }

		[Column("bulletBaseType")]
		public BulletBaseType BaseType { get; set; }

		[Column("bulletCaliber")]
		public Caliber Caliber { get; set; }
	}
}