import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LookupService {

  private baseUrl = '/api/reloads';

  constructor(private http: HttpClient) { }

  getEnums(): Observable<{}> {
    return this.http.get(`${this.baseUrl}/enums`).pipe(shareReplay());
  }

}
