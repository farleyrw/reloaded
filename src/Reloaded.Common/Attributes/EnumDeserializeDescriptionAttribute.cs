using System;

namespace Reloaded.Common.Attributes
{
	/// <summary>Indicates that an enum is to be deserialized based on a <see cref="System.ComponentModel.DescriptionAttribute"/></summary>
	[AttributeUsage(AttributeTargets.Enum)]
	public class EnumDeserializeDescriptionAttribute : Attribute { }
}