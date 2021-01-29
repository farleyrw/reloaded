using System.ComponentModel;

namespace Reloaded.Common.Enums.Components.Bullet
{
	[DefaultValue(Other)]
	public enum BulletConstruction
	{
		Other = 0,

		Lead,

		[Description("Lead Free")]
		LeadFree,

		[Description("Copper Jacket")]
		CopperJacket,

		[Description("Nickel Plated")]
		NickelPlated
	}
}