using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Reloaded.Common.Enums;
using Reloaded.Common.Enums.Firearms;
using Reloaded.Common.Helpers;

namespace Reloaded.Common.Models
{
	/// <summary>The Firearm class.</summary>
	[Table("firearm")]
	public class Firearm : BaseEntity
	{
		[Key]
		public int FirearmId { get; set; }

		public string Nickname { get; set; }

        public string Notes { get; set; }

        [Required]
		public string Model { get; set; }

		[Required]
		public string Brand { get; set; }

		[Required]
		[Column(TypeName = "decimal(18)")]
        [Range(1, 30)]
        public decimal BarrelLength { get; set; }

		[Range(5, 20)]
		public int BarrelTwist { get; set; }

		// TODO: action property?

		[Required]
		public FirearmType Type { get; set; } = FirearmType.Other;

		[Required]
		[Column("chamberType")]
		public Cartridge Chamber { get; set; } = Cartridge.None;

		public string Name
		{
			get
			{
				return $"{this.Brand} {this.Model} {EnumHelper.Description(this.Chamber)}";
			}
		}

        public override string ToString()
        {
			return this.Name;
        }
    }
}