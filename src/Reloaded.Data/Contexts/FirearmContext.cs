using Microsoft.EntityFrameworkCore;
using Reloaded.Common.Models;

namespace Reloaded.Data.Contexts
{
	public class FirearmContext : DbContext
	{
		public FirearmContext(DbContextOptions<FirearmContext> options) : base(options) { }

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			//modelBuilder.Entity<Handload>().OwnsOne(h => h.Casing);
			//modelBuilder.Entity<Handload>().OwnsOne(h => h.Bullet);
			//modelBuilder.Entity<Handload>().OwnsOne(h => h.Primer);

			base.OnModelCreating(modelBuilder);
		}

		public DbSet<Firearm> Firearms { get; set; }
	}
}
