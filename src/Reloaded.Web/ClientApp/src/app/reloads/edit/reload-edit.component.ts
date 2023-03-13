import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirearmService } from '@app/shared/services/firearm.service';
import { ReloadService } from '@app/shared/services/reload.service';
import { Reload } from '@app/models/reload';
import { OrderingService } from '@app/shared/pipes/ordering.service';
import { Observable, Subscription } from 'rxjs';
import { Firearm } from '@app/models/firearm';
import { Lookup } from '@app/models/lookup';

@Component({
  selector: 'app-reload-edit',
  templateUrl: './reload-edit.component.html',
  styleUrls: ['./reload-edit.component.scss']
})
export class ReloadEditComponent implements OnInit, OnDestroy {
  mode: 'edit' | 'add' = 'add';

  reloadId = 0;

  // TODO: replace with observable?
  reload!: Reload;

  firearm!: Firearm;

  lookups$!: Observable<Lookup>;

  originalOrder = OrderingService.originalOrder;

  subscriptions = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private reloadService: ReloadService,
    private firearmService: FirearmService
  ) { }

  ngOnInit() {
    let firearmId = this.route.snapshot.paramMap.get('firearmId')!;

    let param = this.route.snapshot.paramMap.get('reloadId')!;

    if (!isNaN(param as any)) {
      this.mode = 'edit';
      this.reloadId = +param;

      this.loadReload(this.reloadId);
    } else if (param == 'add') {
      this.reload = new Reload();
    } else {
      // invalid parameter
      console.log('invalid paramter', param);
    }

    if (firearmId) {
      this.loadFirearm(+firearmId);
    }

    this.lookups$ = this.reloadService.getEnums();
  }

  loadFirearm(firearmId: number) {
    this.subscriptions.add(this.firearmService.getFirearm(firearmId).subscribe(firearm => {
      this.firearm = firearm; // locks cartridge selection

      if (this.mode == 'add') {
        this.reload.casing.cartridge = this.firearm.chamber;
      }
      // TODO: set bullet.caliber from above, needs mapping
    }));
  }

  loadReload(reloadId: number) {
    this.subscriptions.add(this.reloadService.getReload(reloadId).subscribe(reload => this.reload = reload));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  onSubmit() {
    console.log('form submitted');

    //this.subscriptions.add(this.reloadService.saveReload(this.reload).subscribe(x => {
    //  // TODO:
    //}));
  }

  // TODO: clone reload functionality
  // TODO: map to firearm by caliber
  // TODO: lock cartridge & caliber
}
