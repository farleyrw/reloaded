using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Reloaded.Common.Enums;
using Reloaded.Common.Helpers;

namespace Reloaded.Common.Models
{
	/// <summary>The Firearm class.</summary>
	[Table("firearm")]
	public class Firearm : IBaseModel
	{
		[Key]
		public int FirearmId { get; set; }

		public int AccountId { get; set; }

		[Required]
		public string Model { get; set; }

		public string Brand { get; set; }

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

		[Required]
		public decimal BarrelLength { get; set; }

		//public List<Handload> Handloads { get; set; } = new List<Handload>();
	}
}