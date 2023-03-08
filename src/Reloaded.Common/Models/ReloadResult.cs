using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Reloaded.Common.Models
{
	[Table("reloadResult")]
	public class ReloadResult : BaseEntity
	{
		[Key]
		public int ReloadResultId { get; set; }

		[Required]
		public int ReloadId { get; set; }

		[Required]
		public int FirearmId { get; set; }

		[Required]
		public DateTime Date { get; set; }

		[Required]
		[Column("distanceYds")]
		public int Distance { get; set; }

        [Required]
        [Column("velocityMph")]
        public int Velocity { get; set; } // TODO: calculate if not known

        [Required]
		public int TotalShots { get; set; }

		[Required]
		[Column("groupSizeIn")]
		public double GroupSize { get; set; }

		public WeatherConditions Weather { get; set; }
	}
}