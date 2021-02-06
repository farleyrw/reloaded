using System.ComponentModel.DataAnnotations.Schema;
using Reloaded.Common.Enums.Components;

namespace Reloaded.Common.Models.Components
{
	[ComplexType]
	public class Primer
	{
		[Column("primerBrand")]
		public PrimerManufacturer Brand { get; set; } = PrimerManufacturer.Other;

		[Column("primerType")]
		public PrimerType Type { get; set; } = PrimerType.Other;
	}
}