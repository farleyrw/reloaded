import { Component } from '@angular/core';
import { FirearmService } from '@app/shared/services/firearm.service';

@Component({
  selector: 'app-firearm-list',
  templateUrl: './firearm-list.component.html',
  styleUrls: ['./firearm-list.component.scss']
})
export class FirearmListComponent {
  constructor(private firearmService: FirearmService) { }
}
