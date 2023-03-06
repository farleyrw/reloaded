import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Reload } from '@app/models/reload';

@Injectable({
  providedIn: 'root'
})
export class ReloadService {
  private baseUrl = '/api/handloads';

  constructor(private http: HttpClient) { }

  getHandloads() {
    return of(this.reloads);

    //return this.http.get(`${this.baseUrl}/1`); // account # hard coded
  }

  getHandloadForFirearm(firearmId: number): Observable<Reload> {
    return of(this.reloads[0]);

    //return this.http.get(`${this.baseUrl}/${firearmId}`); // account # hard coded
  }

  getHandloadsForFirearm(firearmId: number): Observable<Reload[]> {
    return of(this.reloads);

    //return this.http.get(`${this.baseUrl}/firearm/${firearmId}`);
  }

  getEnums(): Observable<{}> {
    return this.http.get(`${this.baseUrl}/enums`);
  }

  saveReload(reload: Reload) {
    return this.http.post(this.baseUrl, reload);
  }

  saveReloadResult(result: any) { // TODO: add type
    return this.http.post(`${this.baseUrl}/result`, result);
  }

  private reloads: Reload[] = [
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
  ];
}
