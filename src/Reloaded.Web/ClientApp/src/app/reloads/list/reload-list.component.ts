import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Reload } from '@app/models/reload';
import { Lookup } from '@app/models/lookup';
import { ReloadService } from '../services/reload.service';
import { LookupService } from '../../shared/services/lookup.service';

@Component({
  selector: 'app-reload-list',
  templateUrl: './reload-list.component.html',
  styleUrls: ['./reload-list.component.scss']
})
export class ReloadListComponent implements OnInit {
  reloads$!: Observable<Reload[]>;

  lookups$!: Observable<Lookup>;

  constructor(
    private reloadService: ReloadService,
    private lookupService: LookupService
  ) { }

  ngOnInit() {
    this.reloads$ = this.reloadService.getReloads();
    this.lookups$ = this.lookupService.getEnums();
  }
}
