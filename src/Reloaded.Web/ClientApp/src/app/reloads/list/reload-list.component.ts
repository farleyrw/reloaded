import { Component, OnInit } from '@angular/core';
import { ReloadService } from '@app/shared/services/reload.service';
import { Observable } from 'rxjs';
import { Reload } from '@app/models/reload';
import { Lookup } from '@app/models/lookup';

@Component({
  selector: 'app-reload-list',
  templateUrl: './reload-list.component.html',
  styleUrls: ['./reload-list.component.scss']
})
export class ReloadListComponent implements OnInit {
  reloads$!: Observable<Reload[]>;

  lookups$!: Observable<Lookup>;

  constructor(private reloadService: ReloadService) { }

  ngOnInit() {
    this.reloads$ = this.reloadService.getReloads();
    this.lookups$ = this.reloadService.getEnums();
  }
}
