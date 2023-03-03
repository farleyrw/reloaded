export class Reload {
  accountId!: number;
  createdOn!: Date;
  lastUpdatedOn!: Date;
  handloadId!: number;
  firearmId!: number;
  powder!: string;
  powderCharge!: number;
  seatingDepth!: number;
  primer!: Primer;
  casing!: Casing;
  bullet!: Bullet;
}

export class Primer {
  brand!: string;
  type!: string;
}

export class Casing {
  brand!: string;
  caliber!: string;
  timesFired!: number;
}

export class Bullet {
  weight!: number;
  brand!: string;
  construction!: string;
  type!: string;
  baseType!: string;
  caliber!: string;
}
