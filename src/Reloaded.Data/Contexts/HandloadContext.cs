using Microsoft.EntityFrameworkCore;
using Reloaded.Common.Models;

namespace Reloaded.Data.Contexts
{
	public class HandloadContext : DbContext
	{
		public HandloadContext(DbContextOptions<HandloadContext> options) : base(options) { }

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			modelBuilder.Entity<Handload>(table =>
			{
				table.OwnsOne(h => h.Casing);
				table.OwnsOne(h => h.Bullet);
				table.OwnsOne(h => h.Primer);
			});
			
			modelBuilder.Entity<HandloadResult>().OwnsOne(h => h.Weather);

			base.OnModelCreating(modelBuilder);
		}

		public DbSet<Handload> Handloads { get; set; }

		public DbSet<HandloadResult> HandloadResults { get; set; }
	}
}
