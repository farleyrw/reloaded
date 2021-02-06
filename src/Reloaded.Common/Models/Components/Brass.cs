using System.ComponentModel.DataAnnotations.Schema;
using Reloaded.Common.Enums;
using Reloaded.Common.Enums.Components;

namespace Reloaded.Common.Models.Components
{
	/// <summary>The brass</summary>
	[ComplexType]
	public class Brass
	{
		/// <summary>Gets or sets the manufacturer.</summary>
		/// <value>The manufacturer.</value>
		[Column("brassBrand")]
		public BrassManufacturer Brand { get; set; } = BrassManufacturer.Other;

		/// <summary>Gets or sets the caliber.</summary>
		/// <value>The caliber.</value>
		[Column("brassCaliber")]
		public Cartridge Caliber { get; set; } = Cartridge.None;

		/// <summary>Gets or sets the times fired.</summary>
		/// <value>The times fired.</value>
		[Column("brassTimesFired")]
		public int TimesFired { get; set; }
	}
}