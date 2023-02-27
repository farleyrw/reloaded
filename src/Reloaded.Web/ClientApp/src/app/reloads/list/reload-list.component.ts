import { Component } from '@angular/core';
import { ReloadService } from '@app/shared/services/reload.service';

@Component({
  selector: 'app-reload-list',
  templateUrl: './reload-list.component.html',
  styleUrls: ['./reload-list.component.scss']
})
export class ReloadListComponent {
  constructor(private reloadService: ReloadService) { }
}
