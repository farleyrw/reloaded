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

		/// <summary>Gets or sets the cartridge.</summary>
		/// <value>The cartridge.</value>
		[Column("brassCartridge")]
		public Cartridge Cartridge { get; set; } = Cartridge.None;

		/// <summary>Gets or sets the state of the brass.</summary>
		/// <value>The brass new state.</value>
		public bool NewBrass { get; set; } // TODO: should this go on the result or be removed?
	}
}