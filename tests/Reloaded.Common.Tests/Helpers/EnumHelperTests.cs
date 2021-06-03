using System.Collections.Generic;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Reloaded.Common.Helpers;

namespace Reloaded.Common.Tests.Helpers
{
	[TestClass]
	public class EnumHelperTests
	{
		[TestMethod]
		public void Parse()
		{
			TestEnum testEnum = EnumHelper.Parse<TestEnum>("B");

			Assert.AreEqual(TestEnum.B, testEnum);
		}

		[TestMethod]
		public void Description()
		{
			string description = EnumHelper.Description(TestEnum.B);

			Assert.AreEqual("B", description);
		}

		[TestMethod]
		public void ParseDescription()
		{
			TestEnum testEnum = EnumHelper.ParseDescription<TestEnum>("B");

			Assert.AreEqual(TestEnum.B, testEnum);
		}

		[TestMethod]
		public void Descriptions()
		{
			IDictionary<TestEnum, string> enums = EnumHelper.Descriptions<TestEnum>();

			Assert.AreEqual(3, enums.Count);
			Assert.AreEqual("A", enums[TestEnum.A]);
			Assert.AreEqual("B", enums[TestEnum.B]);
			Assert.AreEqual("C", enums[TestEnum.C]);
		}

		[TestMethod]
		public void DefaultValue()
		{
			TestEnum defaultEnum = EnumHelper.DefaultValue<TestEnum>();

			Assert.AreEqual(TestEnum.A, defaultEnum);
		}

		[TestMethod]
		public void ToList()
		{
			List<TestEnum> enums = EnumHelper.ToList<TestEnum>();

			Assert.AreEqual(3, enums.Count);
			Assert.AreEqual(TestEnum.A, enums[0]);
			Assert.AreEqual(TestEnum.B, enums[1]);
			Assert.AreEqual(TestEnum.C, enums[2]);
		}
	}

	public enum TestEnum
	{
		A = 0,
		B,
		C
	}
}
