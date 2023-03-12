export class Result {
  reloadResultId!: number;
  reloadId!: number;
  firearmId!: number;
  date!: Date;
  distance!: number;
  velocity!: number;
  totalShots!: number;
  groupSize!: number;
  weather = new Weather();
}

export class Weather {
  temperature!: number;
  elevation!: number;
  windSpeed!: number;
}
