import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Reload } from '@app/models/reload';
import { Lookup } from '@app/models/lookup';
import { Firearm } from '@app/models/firearm';
import { ReloadService } from '../services/reload.service';
import { FirearmService } from '../../firearms/services/firearm.service';
import { LookupService } from '../../shared/services/lookup.service';

@Component({
  selector: 'app-reload-view',
  templateUrl: './reload-view.component.html',
  styleUrls: ['./reload-view.component.scss']
})
export class ReloadViewComponent implements OnInit {
  reloadId!: string;

  reload$!: Observable<Reload>;

  firearms$!: Observable<Firearm[]>;

  lookups$!: Observable<Lookup>;

  constructor(
    private route: ActivatedRoute,
    private reloadService: ReloadService,
    private firearmService: FirearmService,
    private lookupService: LookupService
  ) { }

  ngOnInit() {
    this.reloadId = this.route.snapshot.paramMap.get('reloadId')!;

    this.reload$ = this.reloadService.getReload(this.reloadId)
      .pipe(tap(reload => this.firearms$ = this.firearmService.getFirearmsByCartridge(reload.casing.cartridge)));

    this.lookups$ = this.lookupService.getEnums();
  }

  getReloadTitle = this.reloadService.getTitle;

  getFirearmTitle = this.firearmService.getTitle;
}
