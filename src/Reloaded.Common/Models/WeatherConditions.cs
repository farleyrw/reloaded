using System.ComponentModel.DataAnnotations.Schema;

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
	}
}