import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Result, Weather } from '@app/models/result';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor() { }

  getResults(): Observable<Result[]> {
    return of(this.results);
  }

  getResultsForReload(reloadId: number): Observable<Result[]> {
    return of(this.results)
  }

  getResult(reloadResultId: number): Observable<Result> {
    return of(this.results[0])
  }

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
    weather: new Weather()
  }];
}
