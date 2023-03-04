import { KeyValue } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderingService {

  static originalOrder = (a: KeyValue<string, string>, b: KeyValue<string, string>) => 0;
}
