import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Firearm } from '@app/models/firearm';
import { FirearmService } from '../services/firearm.service';

@Component({
  selector: 'app-firearm-list',
  templateUrl: './firearm-list.component.html',
  styleUrls: ['./firearm-list.component.scss']
})
export class FirearmListComponent implements OnInit {
  firearms$!: Observable<Firearm[]>;

  constructor(private firearmService: FirearmService) { }

  ngOnInit() {
    this.firearms$ = this.firearmService.getFirearms();
  }

  getTitle = this.firearmService.getTitle;
}
