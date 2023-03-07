export class Reload {
  constructor(firearmId: number) {
    this.firearmId = firearmId;
  }
  accountId!: number;
  createdOn!: Date;
  lastUpdatedOn!: Date;
  handloadId!: number;
  firearmId!: number;
  powder!: string;
  powderCharge!: number;
  overallLength!: number;
  primer = new Primer();
  casing = new Casing();
  bullet = new Bullet();
  nickname!: string;
  notes!: string;
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
