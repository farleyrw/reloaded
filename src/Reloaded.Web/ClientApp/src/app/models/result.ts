export class Result {
  reloadResultId!: number;
  reloadId!: number;
  firearmId!: number;
  date!: Date;
  notes!: string;
  distance!: number;
  velocity!: number;
  totalShots!: number;
  groupSize!: number;
  weather = new Weather();
}

// TODO: turn into metadata
export class Weather {
  temperature!: number;
  elevation!: number;
  windSpeed!: number;
  hasData(): boolean {
    return !!this.temperature || !!this.elevation || !!this.windSpeed;
  }
}
