using System;

namespace Reloaded.Common.Models
{
    public interface IAuditTimestamp
    {
        DateTime CreatedOn { get; set; }

        DateTime LastUpdatedOn { get; set; }
    }
}
