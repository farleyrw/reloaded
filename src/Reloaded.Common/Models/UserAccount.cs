using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Reloaded.Common.Models
{
    /// <summary>The account class.</summary>
    [Table("account")]
	public class UserAccount : IAuditTimestamp
	{
		[Key]
        public int AccountId { get; set; }

        public string Name { get; set; }

        public DateTime CreatedOn { get; set; }

        public DateTime LastUpdatedOn { get; set; }
    }
}