using System.ComponentModel.DataAnnotations.Schema;
using Reloaded.Common.Enums;

namespace Reloaded.Common.Models
{
	[ComplexType]
	public class WeatherConditions
	{
		[Column("weatherTemperatureF")]
		public int Temperature { get; set; }

		[Column("weatherElevationFt")]
		public int Elevation { get; set; }

		[Column("weatherWindSpeedMph")]
		public int WindSpeed { get; set; }

		[Column("weatherWindDirection")]
		public WindDirection WindDirection { get; set; }
	}
}