import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Reload } from '@app/models/reload';
import { ReloadService } from '@app/shared/services/reload.service';
import { Lookup } from '@app/models/lookup';

@Component({
  selector: 'app-reload-view',
  templateUrl: './reload-view.component.html',
  styleUrls: ['./reload-view.component.scss']
})
export class ReloadViewComponent implements OnInit {
  reload$!: Observable<Reload>;

  lookups$!: Observable<Lookup>;

  constructor(
    private route: ActivatedRoute,
    private reloadService: ReloadService
  ) { }

  ngOnInit() {
    let reloadId = +this.route.snapshot.paramMap.get('reloadId')!;

    this.reload$ = this.reloadService.getReload(reloadId);

    this.lookups$ = this.reloadService.getEnums();
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
