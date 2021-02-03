using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Reloaded.Common.Models
{
	[Table("handloadResult")]
	public class HandloadResult : IBaseModel
	{
		[Key]
		public int HandloadResultId { get; set; }

		[Required]
		public int AccountId { get; set; }

		[Required]
		public int HandloadId { get; set; }

		[Required]
		public DateTime Date { get; set; }

		[Required]
		public int Yardage { get; set; }

		[Required]
		public int TotalShots { get; set; }

		[Required]
		[Column("groupSizeIn")]
		public double GroupSize { get; set; }

		public WeatherConditions Weather { get; set; }
	}
}