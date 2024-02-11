import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
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

    this.reload$ = this.reloadService.getReload(this.reloadId);

    this.lookups$ = this.reloadService.getEnums();

    this.firearms$ = this.firearmService.getFirearmsByCartridge('1'); // TODO: get value from reload stream
  }

  getTitle(reload: Reload, lookups: Lookup): string {
    if (reload.nickname) {
      return reload.nickname;
    }

    return [
      lookups.cartridges[reload.casing.cartridge],
      reload.bullet.weight, 'gr',
      reload.bullet.brand,
      reload.powderCharge, 'gr',
      reload.powder
    ].join(' ');
  }
}
