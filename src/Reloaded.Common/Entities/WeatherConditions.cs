﻿using Reloaded.Common.Enums;

namespace Reloaded.Common.Models
{
	public class WeatherConditions
	{
		public int Temperature { get; set; }

		public int ElevationFeet { get; set; }

		public int WindSpeedMph { get; set; }

		public WindDirection WindDirection { get; set; }
	}
}