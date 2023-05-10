using System;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;
using Reloaded.Common.Models;

namespace Reloaded.Data.Interceptors
{
    public class UpdateAuditableEntityInterceptor : SaveChangesInterceptor
    {
        public void UpdateAuditableEntries(DbContext dbContext)
        {
            var entries = dbContext.ChangeTracker.Entries<IAuditTimestamp>();

            foreach (var entry in entries)
            {
                if (entry.State == EntityState.Added)
                {
                    entry.Property(a => a.CreatedOn).CurrentValue = DateTime.Now;
                }

                if (entry.State == EntityState.Modified || entry.State == EntityState.Added)
                {
                    entry.Property(a => a.LastUpdatedOn).CurrentValue = DateTime.Now;
                }
            }
        }

        public override InterceptionResult<int> SavingChanges(DbContextEventData eventData, InterceptionResult<int> result)
        {
            this.UpdateAuditableEntries(eventData.Context);

            return base.SavingChanges(eventData, result);
        }

        public override ValueTask<InterceptionResult<int>> SavingChangesAsync(DbContextEventData eventData, InterceptionResult<int> result, CancellationToken cancellationToken = default)
        {
            this.UpdateAuditableEntries(eventData.Context);

            return base.SavingChangesAsync(eventData, result, cancellationToken);
        }
    }
}
