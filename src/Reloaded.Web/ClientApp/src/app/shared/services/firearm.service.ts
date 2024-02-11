import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Firearm } from '@app/models/firearm';

@Injectable({
  providedIn: 'root'
})
export class FirearmService {
  private baseUrl = '/api/firearms';

  constructor(private http: HttpClient) { }

  getFirearm(firearmId: string | number): Observable<Firearm> {
    //return of(this.firearms[0]);

    return this.http.get<Firearm>(`${this.baseUrl}/${firearmId}`);
  }

  getFirearms(): Observable<Firearm[]> {
    //return of(this.firearms);

    return this.http.get<Firearm[]>(`${this.baseUrl}/list/1`); // account # hard coded
  }

  getFirearmsByCartridge(cartridge: string | number): Observable<Firearm[]> {
    return of([this.firearms[0], this.firearms[2]]);
  }

  getEnums(): Observable<{}> {
    return this.http.get(`${this.baseUrl}/enums`);
  }

  saveFirearm(firearm: Firearm) {
    return this.http.post(this.baseUrl, firearm);
  }

  private firearms: Firearm[] = [
    {
      firearmId: 1,
      nickname: "Sharts",
      notes: "Super awesome scope",
      model: "700 SPS",
      brand: "Remington",
      barrelLength: 22,
      barrelTwist: 8,
      type: "Rifle",
      chamber: "TwentyTwoTwoFiftyRemington",
      name: "Remington 700 SPS 22-250 Rem.",
      accountId: 1,
      createdOn: new Date("2022-01-05T04:56:15.488Z"),
      lastUpdatedOn: new Date("2023-03-03T04:56:15.488Z"),
    },
    {
      firearmId: 2,
      nickname: "Turds",
      notes: "A truck gun",
      model: "Model 70",
      brand: "Winchester",
      barrelLength: 20,
      barrelTwist: 10,
      type: "Rifle",
      chamber: "ThirtyOSixSpringfield",
      name: "Winchester 30-06 Model 70",
      accountId: 1,
      createdOn: new Date("2022-01-05T04:56:15.488Z"),
      lastUpdatedOn: new Date("2023-07-20T04:56:15.488Z"),
    },
    {
      firearmId: 3,
      nickname: "Boof",
      notes: "A boofer",
      model: "AR 15",
      brand: "Custom",
      barrelLength: 16,
      barrelTwist: 8,
      type: "Rifle",
      chamber: "TwoTwoThreeRemington",
      name: "Custom 223 Rem. AR 15",
      accountId: 1,
      createdOn: new Date("2022-08-35T04:56:15.488Z"),
      lastUpdatedOn: new Date("2023-02-12T04:56:15.488Z"),
    }
  ];
}
