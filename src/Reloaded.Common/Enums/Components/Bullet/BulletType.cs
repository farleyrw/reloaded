using System.ComponentModel;

namespace Reloaded.Common.Enums.Components.Bullet
{
	[DefaultValue(Other)]
	public enum BulletType
	{
		Other = 0,

		[Description("Hollow Point")]
		HollowPoint,

		[Description("Round Nose")]
		RoundNose,

		[Description("FMJ")]
		FullMetalJacket,

		[Description("Ballistic Tip")]
		BallisticTip
	}
}