using Microsoft.EntityFrameworkCore;
using Reloaded.Common.Models;

namespace Reloaded.Data.Contexts
{
	public class ReloadContext : DbContext
	{
		public ReloadContext(DbContextOptions<ReloadContext> options) : base(options) { }

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			modelBuilder.Entity<Reload>(table =>
			{
				table.OwnsOne(h => h.Casing);
				table.OwnsOne(h => h.Bullet);
				table.OwnsOne(h => h.Primer);
			});
			
			modelBuilder.Entity<ReloadResult>().OwnsOne(h => h.Weather);

			base.OnModelCreating(modelBuilder);
		}

		public DbSet<Reload> Reloads { get; set; }

		public DbSet<ReloadResult> ReloadResults { get; set; }

        public DbSet<ReloadFirearmMap> ReloadFirearmMaps { get; set; }
    }
}
