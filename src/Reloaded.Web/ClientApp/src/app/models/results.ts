export class Results {
  reloadResultId!: number;
  reloadId!: number;
  firearmId!: number;
  date!: Date;
  distance!: number;
  velocity!: number;
  totalShots!: number;
  groupSize!: number;
  weather!: Weather;
}

export class Weather {
  temperature!: number;
  elevation!: number;
  windSpeed!: number;
}
