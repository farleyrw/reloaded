using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Reloaded.Common.Enums.Components;
using Reloaded.Common.Models.Components;

namespace Reloaded.Common.Models
{
	[Table("reload")]
	public class Reload : BaseEntity
	{
		[Key]
		public int ReloadId { get; set; }

        public string Nickname { get; set; }

        public string Notes { get; set; }

        [Column("powderType")]
		public GunPowder Powder { get; set; } = GunPowder.None;

		[Required]
		[Column("powderChargeGr")]
		public double PowderCharge { get; set; }

		[Required]
		[Column("overallLengthIn")]
		public double OverallLength { get; set; }

        public Primer Primer { get; set; } = new Primer();

		public Brass Casing { get; set; } = new Brass();

		public Bullet Bullet { get; set; } = new Bullet();

		public List<ReloadResult> Results { get; set; } = new List<ReloadResult>();
    }
}