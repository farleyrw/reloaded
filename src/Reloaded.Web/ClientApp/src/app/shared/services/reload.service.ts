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

  getHandloadsForFirearm(firearmId: number): Observable<Reload[]> {
    return of([
      {
        "accountId": 0,
        "createdOn": new Date("2023-03-03T04:56:15.488Z"),
        "lastUpdatedOn": new Date("2023-03-03T04:56:15.488Z"),
        "handloadId": 0,
        "firearmId": 1,
        "powder": "IMR4895",
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
          "brand": "Nosler",
          "construction": "Other",
          "type": "Ballistic Tip",
          "baseType": "Boat Tail",
          "caliber": "Other"
        }
      },
      {
        "accountId": 0,
        "createdOn": new Date("2023-01-11T04:56:15.488Z"),
        "lastUpdatedOn": new Date("2023-03-03T04:56:15.488Z"),
        "handloadId": 0,
        "firearmId": 1,
        "powder": "H380",
        "powderCharge": 32,
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
          "weight": 45,
          "brand": "Nosler",
          "construction": "Other",
          "type": "Ballistic Tip",
          "baseType": "Boat Tail",
          "caliber": "Other"
        }
      }
    ]);

    //return this.http.get(`/api/handloads/firearm/${firearmId}`);
  }
}
