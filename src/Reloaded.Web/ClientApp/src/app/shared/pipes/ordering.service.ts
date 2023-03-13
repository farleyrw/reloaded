import { KeyValue } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderingService {

  static originalOrder = (a: KeyValue<string, any>, b: KeyValue<string, any>) => 0;
}
