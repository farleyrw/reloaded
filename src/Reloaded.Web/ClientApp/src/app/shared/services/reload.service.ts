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

  getReloads() {
    return of(this.reloads);

    //return this.http.get(`${this.baseUrl}/1`); // account # hard coded
  }

  getReload(reloadId: number): Observable<Reload> {
    return of(this.reloads.filter(r => r.handloadId == reloadId)[0]);

    //return this.http.get(`${this.baseUrl}/${reloadId}`);
  }

  getReloadsForFirearm(firearmId: number): Observable<Reload[]> {
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
      accountId: 0,
      createdOn: new Date("2023-03-03T04:56:15.488Z"),
      lastUpdatedOn: new Date("2023-03-03T04:56:15.488Z"),
      handloadId: 1,
      firearmId: 1,
      nickname: "Best",
      powder: "IMR4895",
      powderCharge: 30,
      overallLength: 2.25,
      notes: "The best reload",
      primer: {
        brand: "Other",
        type: "Other"
      },
      casing: {
        brand: "Nosler",
        cartridge: "TwentyTwoTwoFiftyRemington",
        newBrass: true
      },
      bullet: {
        weight: 40,
        brand: "Nosler",
        construction: "Other",
        tipType: "BallisticTip",
        baseType: "Boattail",
        caliber: "TwentyTwo"
      }
    },
    {
      accountId: 0,
      createdOn: new Date("2023-01-11T04:56:15.488Z"),
      lastUpdatedOn: new Date("2023-03-03T04:56:15.488Z"),
      handloadId: 2,
      firearmId: 1,
      nickname: "Fair",
      powder: "H380",
      powderCharge: 32,
      overallLength: 2.25,
      notes: "A fair reload",
      primer: {
        brand: "Other",
        type: "Other"
      },
      casing: {
        brand: "Winchester",
        cartridge: "TwentyTwoTwoFiftyRemington",
        newBrass: true
      },
      bullet: {
        weight: 45,
        brand: "Nosler",
        construction: "Other",
        tipType: "BallisticTip",
        baseType: "Boattail",
        caliber: "TwentyTwo"
      }
    }
  ];
}
