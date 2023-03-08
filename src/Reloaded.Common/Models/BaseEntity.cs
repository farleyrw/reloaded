using System;
using System.ComponentModel.DataAnnotations;

namespace Reloaded.Common.Models
{
	/// <summary>The base entity class.</summary>
	public abstract class BaseEntity : IAuditTimestamp
	{
        // TODO: query with this automatically with context hooks
        [Required]
        public int AccountId { get; set; }

        // TODO: set these automatically with context hooks
        public DateTime CreatedOn { get; set; }

        public DateTime LastUpdatedOn { get; set; }
	}
}