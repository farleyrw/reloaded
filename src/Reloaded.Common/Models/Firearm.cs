using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Reloaded.Common.Attributes;
using Reloaded.Common.Enums;
using Reloaded.Common.Enums.Firearms;
using Reloaded.Common.Helpers;

namespace Reloaded.Common.Models
{
	/// <summary>The Firearm class.</summary>
	[Table("firearm")]
	public class Firearm : IBaseModel
	{
		[Key]
		public int FirearmId { get; set; }

		[Required]
		public int AccountId { get; set; }

		[Required]
		public string Model { get; set; }

		[Required]
		public string Brand { get; set; }

		[Required]
		[Column(TypeName = "decimal(18)")]
		public decimal BarrelLength { get; set; }

		public FirearmType Type { get; set; } = FirearmType.Other;

		[Column("chamberType")]
		public Cartridge Chamber { get; set; } = Cartridge.None;

		public string Name
		{
			get
			{
				return string.Format(
					"{0} {1} {2}",
					this.Brand,
					this.Model,
					EnumHelper.Description(this.Chamber)
				);
			}
		}
	}
}