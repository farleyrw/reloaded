﻿using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Reloaded.Common.Enums.Components;
using Reloaded.Common.Models.Components;

namespace Reloaded.Common.Models
{
	public class Handload : IBaseModel
	{
		[Key]
		public int HandloadId { get; set; }

		public int AccountId { get; set; }

		public GunPowder Powder { get; set; }

		[Required]
		public double PowderCharge { get; set; }

		public Primer Primer { get; set; }

		public Brass Casing { get; set; }

		public Bullet Bullet { get; set; }

		[Required]
		public double SeatingDepth { get; set; }

		[Required]
		public int FirearmId { get; set; }

		public List<HandloadResult> Results { get; set; }

		public Handload()
		{
			this.Powder = GunPowder.None;
			this.Primer = new Primer();
			this.Casing = new Brass();
			this.Bullet = new Bullet();
			this.Results = new List<HandloadResult>();
		}
	}
}