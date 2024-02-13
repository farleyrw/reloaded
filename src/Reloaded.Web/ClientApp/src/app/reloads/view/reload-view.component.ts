import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Reload } from '@app/models/reload';
import { ReloadService } from '@app/shared/services/reload.service';
import { Lookup } from '@app/models/lookup';
import { FirearmService } from '@app/shared/services/firearm.service';
import { Firearm } from '@app/models/firearm';

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
    private firearmService: FirearmService
  ) { }

  ngOnInit() {
    this.reloadId = this.route.snapshot.paramMap.get('reloadId')!;

    this.reload$ = this.reloadService.getReload(this.reloadId)
      .pipe(tap(reload => this.firearms$ = this.firearmService.getFirearmsByCartridge(reload.casing.cartridge)));

    this.lookups$ = this.reloadService.getEnums();
  }

  getReloadTitle = this.reloadService.getTitle;

  getFirearmTitle = this.firearmService.getTitle;
}
