
export class Reload {
  reloadId!: number;
  accountId!: number;
  createdOn!: Date;
  lastUpdatedOn!: Date;
  nickname!: string;
  notes!: string;
  powder!: string;
  powderCharge!: number;
  overallLength!: number;
  primer = new Primer();
  casing = new Casing();
  bullet = new Bullet();
}

export class Primer {
  brand!: string;
  type!: string;
}

export class Casing {
  brand!: string;
  cartridge!: string;
  newBrass!: boolean;
}

export class Bullet {
  weight!: number;
  brand!: string;
  construction!: string;
  tipType!: string;
  baseType!: string;
  caliber!: string;
}

export class ReloadFirearmMap {
  reloadId!: number;
  firearmId!: number;
}
