import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Firearm } from '@app/models/firearm';

@Injectable({
  providedIn: 'root'
})
export class FirearmService {

  constructor(private http: HttpClient) { }

  getFirearm(firearmId: number): Observable<Firearm> {
    return of(this.firearms[0]);
  }

  getFirearms(): Observable<Firearm[]> {
    return of(this.firearms);
    //return this.http.get('/api/firearms');
  }

  private firearms = [
    {
      firearmId: 1,
      nickname: "Sharts",
      model: "700 SPS",
      brand: "Remington",
      barrelLength: 22,
      type: "Rifle",
      chamber: "TwentyTwoTwoFiftyRemington",
      name: "Remington 700 SPS 22-250 Remington",
      accountId: 1,
      createdOn: new Date("2022-01-05T04:56:15.488Z"),
      lastUpdatedOn: new Date("2023-03-03T04:56:15.488Z"),
    },
    {
      firearmId: 2,
      nickname: "",
      model: "Model 70",
      brand: "Winchester",
      barrelLength: 20,
      type: "Rifle",
      chamber: "30-06",
      name: "Winchester 30-06 Model 70",
      accountId: 1,
      createdOn: new Date("2022-01-05T04:56:15.488Z"),
      lastUpdatedOn: new Date("2023-07-20T04:56:15.488Z"),
    }
  ];
}
