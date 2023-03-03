import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Reload } from '../../models/reload';

@Injectable({
  providedIn: 'root'
})
export class ReloadService {

  constructor(private http: HttpClient) { }

  getHandloads() {
    return this.http.get('/api/handloads/1');
  }

  getHandloadsForFirearm(firearmId: string): Observable<Reload[]> {
    return of([
      {
        "accountId": 0,
        "createdOn": new Date("2023-03-03T04:56:15.488Z"),
        "lastUpdatedOn": new Date("2023-03-03T04:56:15.488Z"),
        "handloadId": 0,
        "firearmId": 1,
        "powder": "Custom",
        "powderCharge": 30,
        "seatingDepth": 2.25,
        "primer": {
          "brand": "Other",
          "type": "Other"
        },
        "casing": {
          "brand": "Other",
          "caliber": "Custom",
          "timesFired": 3
        },
        "bullet": {
          "weight": 40,
          "brand": "Other",
          "construction": "Other",
          "type": "Other",
          "baseType": "Other",
          "caliber": "Other"
        }
      }
    ]);

    //return this.http.get(`/api/handloads/firearm/${firearmId}`);
  }
}
