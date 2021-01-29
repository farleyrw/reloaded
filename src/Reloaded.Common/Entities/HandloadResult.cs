﻿using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Reloaded.Common.Models
{
	public class HandloadResult : IBaseModel
	{
		[Key]
		public int HandloadResultId { get; set; }

		public int AccountId { get; set; }

		[Required]
		public DateTime Date { get; set; }

		[Required]
		public int Yardage { get; set; }

		[Required]
		public int TotalShots { get; set; }

		[Required]
		public double GroupSizeInches { get; set; }

		public WeatherConditions Weather { get; set; }

		public int HandloadId { get; set; }
	}
}