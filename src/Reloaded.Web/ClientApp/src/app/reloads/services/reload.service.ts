import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, shareReplay } from 'rxjs';
import { Reload } from '@app/models/reload';
import { Lookup } from '../../models/lookup';

@Injectable({
  providedIn: 'root'
})
export class ReloadService {
  private baseUrl = '/api/reloads';

  constructor(private http: HttpClient) { }

  getReloads() {
    return of(this.reloads);

    //return this.http.get(`${this.baseUrl}/1`); // account # hard coded
  }

  getReload(reloadId: string | number): Observable<Reload> {
    return of(this.reloads.filter(r => r.reloadId == reloadId)[0]);

    //return this.http.get(`${this.baseUrl}/${reloadId}`);
  }

  getReloadsForFirearm(firearmId: string | number): Observable<Reload[]> {
    return of(this.reloads);

    //return this.http.get(`${this.baseUrl}/firearm/${firearmId}`);
  }

  getEnums(): Observable<{}> {
    return this.http.get(`${this.baseUrl}/enums`).pipe(shareReplay());
  }

  saveReload(reload: Reload) {
    return this.http.post(this.baseUrl, reload);
  }

  saveReloadResult(result: any) { // TODO: add type
    return this.http.post(`${this.baseUrl}/result`, result);
  }

  getTitle(reload: Reload, lookups: Lookup): string {
    const name = [
      lookups.cartridges[reload.casing.cartridge],
      reload.bullet.weight, 'gr',
      reload.bullet.brand,
      reload.powderCharge, 'gr',
      reload.powder
    ].join(' ');

    if (reload.nickname) {
      return `${reload.nickname} (${name})`;
    }

    return name;
  }

  private reloads: Reload[] = [
    {
      accountId: 1,
      createdOn: new Date("2023-03-03T04:56:15.488Z"),
      lastUpdatedOn: new Date("2023-03-03T04:56:15.488Z"),
      reloadId: 1,
      nickname: "Best",
      powder: "IMR4895",
      powderCharge: 30,
      overallLength: 2.25,
      notes: "The best reload",
      primer: {
        brand: "CCI",
        type: "SmallRifleMagnum"
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
      accountId: 1,
      createdOn: new Date("2023-01-11T04:56:15.488Z"),
      lastUpdatedOn: new Date("2023-03-03T04:56:15.488Z"),
      reloadId: 2,
      nickname: "Fair",
      powder: "H380",
      powderCharge: 32,
      overallLength: 2.25,
      notes: "A fair reload",
      primer: {
        brand: "Winchester",
        type: "SmallRifle"
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
