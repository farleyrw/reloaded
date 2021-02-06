using System.ComponentModel.DataAnnotations;
using Reloaded.Common.Enums;
using Reloaded.Common.Enums.Components.Bullet;

namespace Reloaded.Common.Models.Components
{
	//[ComplexType]
	public class Bullet
	{
		[Required]
		public int Weight { get; set; }

		public BulletManufacturer Brand { get; set; } = BulletManufacturer.Other;

		public BulletConstruction Construction { get; set; } = BulletConstruction.Other;

		public BulletType Type { get; set; } = BulletType.Other;

		public BulletBaseType BaseType { get; set; } = BulletBaseType.Other;

		public Caliber Caliber { get; set; } = Caliber.Other;
	}
}