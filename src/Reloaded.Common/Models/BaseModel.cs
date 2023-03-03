using System;
using System.ComponentModel.DataAnnotations;

namespace Reloaded.Common.Models
{
	/// <summary>The base model class.</summary>
	public abstract class BaseModel
	{
        /// <summary>Gets or sets the account identifier.</summary>
        /// <value>The account identifier.</value>
        [Required]
        public int AccountId { get; set; }

        public DateTime CreatedOn { get; set; }

        public DateTime LastUpdatedOn { get; set; }
	}
}