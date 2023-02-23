using FakeItEasy;
using FluentAssertions;
using Microsoft.AspNetCore.Mvc;
using Reloaded.Web.Controllers;

namespace Reloaded.Web.Tests.Controllers
{
    [TestClass]
    public class FirearmsControllerTests
    {
        private FirearmsController underTest;

        [TestInitialize]
        public void Setup()
        {
            this.underTest = A.Fake<FirearmsController>();
        }

        [TestMethod]
        public void TestMethod1()
        {
            this.underTest.GetEnums().As<OkObjectResult>().Value.Should().NotBeNull();
        }
    }
}