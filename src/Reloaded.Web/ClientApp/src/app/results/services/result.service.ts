import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Result, ResultConditions } from '@app/models/result';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor() { }

  getResults(): Observable<Result[]> {
    return of(this.results);
  }

  getResultsForReload(reloadId: string | number): Observable<Result[]> {
    return of(this.results);
  }

  getResult(reloadResultId: string | number): Observable<Result> {
    return of(this.results[+reloadResultId - 1]);
  }

  hasConditions(conditions: ResultConditions): boolean {
    return conditions && (!!conditions.temperature || !!conditions.elevation || !!conditions.windSpeed);
  }

  // TODO: move to service/data

  private results: Result[] = [{
    reloadResultId: 1,
    reloadId: 1,
    firearmId: 1,
    date: new Date("2022-01-05T04:56:15.488Z"),
    notes: 'Upset stomach, indigestion',
    distance: 100,
    totalShots: 5,
    velocity: 3350,
    groupSize: .85,
    conditions: {
      elevation: 445,
      temperature: 55,
      windSpeed: 5
    } as ResultConditions
  }, {
    reloadResultId: 2,
    reloadId: 2,
    firearmId: 2,
    date: new Date("2022-03-15T04:56:15.488Z"),
    notes: 'Diarrhea cha-cha-cha!',
    distance: 200,
    totalShots: 5,
    velocity: 2950,
    groupSize: 1.25,
    conditions: {
      elevation: 775,
      temperature: 75,
      windSpeed: 3
    } as ResultConditions
  }];
}
