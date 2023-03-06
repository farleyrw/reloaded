using System.ComponentModel;
using Reloaded.Common.Attributes;

namespace Reloaded.Common.Enums
{
	/// <summary>The gun caliber.</summary>
	[EnumDeserializeDescription]
	[DefaultValue(None)]
	public enum Cartridge
	{
		/// <summary>Not specified</summary>
		None = -1,

		/// <summary>Custom Caliber</summary>
		[Description("Wildcat")]
		Custom = 0,

		/// <summary>.22 LR</summary>
		[Description("22 LR")]
		TwentyTwoLongRifle,

		/// <summary>.223 Remington</summary>
		[Description("223 Rem.")]
		TwoTwoThreeRemington,

		/// <summary>22-250 Remington</summary>
		[Description("22-250 Rem.")]
		TwentyTwoTwoFiftyRemington,

		/// <summary>.243 Winchester</summary>
		[Description("243 Win.")]
		TwoFourtyThreeWinchester,

		/// <summary>7mm08 Remington</summary>
		[Description("7mm-08 Rem.")]
		SevenOEightRemington,

		/// <summary>7mm Remington Magnum</summary>
		[Description("7mm Rem. Magnum")]
		SevenRemingtonMagnum,

		/// <summary>308 Winchester</summary>
		[Description("308 Win.")]
		ThreeOEightWinchester,

		/// <summary>30-06 Springfield</summary>
		[Description("30-06 Springfield")]
		ThirtyOSixSpringfield,

		/// <summary>8mm Mauser</summary>
		[Description("8mm Mauser")]
		EightMauser,

		/// <summary>35 Remington</summary>
		[Description("35 Rem.")]
		ThirtyFiveRemington,

		/// <summary>9mm Luger</summary>
		[Description("9mm Luger")]
		NineLuger,

		/// <summary>38 Special</summary>
		[Description("38 Special")]
		ThirtyEightSpecial,

		/// <summary>44 Magnum</summary>
		[Description("44 Magnum")]
		FourtyFourMagnum,

		/// <summary>.45 ACP</summary>
		[Description("45 ACP")]
		FourtyFiveAcp
	}
}