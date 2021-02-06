using System.ComponentModel.DataAnnotations.Schema;
using Reloaded.Common.Enums.Components;

namespace Reloaded.Common.Models.Components
{
	[ComplexType]
	public class Primer
	{
		public PrimerManufacturer Brand { get; set; } = PrimerManufacturer.Other;

		public PrimerType Type { get; set; } = PrimerType.Other;
	}
}