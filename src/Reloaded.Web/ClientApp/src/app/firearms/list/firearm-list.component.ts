import { Component, OnInit } from '@angular/core';
import { FirearmService } from '@app/shared/services/firearm.service';
import { Observable } from 'rxjs';
import { Firearm } from '@app/models/firearm';

@Component({
  selector: 'app-firearm-list',
  templateUrl: './firearm-list.component.html',
  styleUrls: ['./firearm-list.component.scss']
})
export class FirearmListComponent implements OnInit {
  firearms$!: Observable<Firearm[]>;

  lookups$!: Observable<{ [key: string]: string }>;

  constructor(private firearmService: FirearmService) { }

  ngOnInit() {
    this.firearms$ = this.firearmService.getFirearms();
    this.lookups$ = this.firearmService.getEnums();
  }
}
