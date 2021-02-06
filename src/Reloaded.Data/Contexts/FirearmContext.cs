using Microsoft.EntityFrameworkCore;
using Reloaded.Common.Models;

namespace Reloaded.Data.Contexts
{
	public class FirearmContext : DbContext
	{
		public FirearmContext(DbContextOptions<FirearmContext> options) : base(options) { }

		public DbSet<Firearm> Firearms { get; set; }
	}
}
