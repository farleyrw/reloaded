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
		public int Weight { get; set; }

		public BulletManufacturer Brand { get; set; }

		public BulletConstruction Construction { get; set; }

		public BulletType Type { get; set; }

		public BulletBaseType BaseType { get; set; }

		public Caliber Caliber { get; set; }
	}
}