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
  conditions = new ResultConditions();
}

// TODO: turn into metadata
export class ResultConditions {
  temperature!: number;
  elevation!: number;
  windSpeed!: number;
}
