using System.Diagnostics.CodeAnalysis;
using Microsoft.EntityFrameworkCore;
using Reloaded.Common.Models;

namespace Reloaded.Data.Contexts
{
    [ExcludeFromCodeCoverage]
    public class UserAccountContext : DbContext
    {
        public UserAccountContext(DbContextOptions<UserAccountContext> options) : base(options) { }

        public DbSet<UserAccount> UserAccounts { get; set; }
    }
}
