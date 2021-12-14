using System.Diagnostics.CodeAnalysis;
using Microsoft.EntityFrameworkCore;
using Reloaded.Common.Models;

namespace Reloaded.Data.Contexts
{
	[ExcludeFromCodeCoverage]
	public class FirearmContext : DbContext
	{
		public FirearmContext(DbContextOptions<FirearmContext> options) : base(options) { }

		public DbSet<Firearm> Firearms { get; set; }
	}
}
