import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirearmService {

  constructor(private http: HttpClient) { }

  getFirearms() {
    return this.http.get('/api/firearms');
  }
}
