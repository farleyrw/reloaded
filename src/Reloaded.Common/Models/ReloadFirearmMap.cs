using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Reloaded.Common.Models
{
	/// <summary>The mapping of reload to firearm.</summary>
	[Table("reloadFirearmMap")]
    [PrimaryKey(nameof(ReloadId), nameof(FirearmId))]
    public class ReloadFirearmMap : BaseEntity
	{
        public int ReloadId { get; set; }

		public int FirearmId { get; set; }
    }
}