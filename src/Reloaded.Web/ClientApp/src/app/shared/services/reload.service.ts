import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReloadService {

  constructor(private http: HttpClient) { }

  getHandloads(firearmId: number) {
    return this.http.get(`/api/handloads/${firearmId}`);
  }
}
