import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirearmService } from '@app/shared/services/firearm.service';
import { ReloadService } from '@app/shared/services/reload.service';
import { Reload } from '@app/models/reload';
import { OrderingService } from '@app/shared/pipes/ordering.service';
import { BehaviorSubject, Observable, shareReplay, tap } from 'rxjs';
import { Firearm } from '@app/models/firearm';
import { Lookup } from '@app/models/lookup';

@Component({
  selector: 'app-reload-edit',
  templateUrl: './reload-edit.component.html',
  styleUrls: ['./reload-edit.component.scss']
})
export class ReloadEditComponent implements OnInit {
  mode: 'edit' | 'add' = 'add';

  reloadId = 0;

  hasFirearm = false;
  
  reload$!: Observable<Reload>;
  
  firearm$!: Observable<Firearm>;

  lookups$!: Observable<Lookup>;

  originalOrder = OrderingService.originalOrder;
  
  constructor(
    private route: ActivatedRoute,
    private reloadService: ReloadService,
    private firearmService: FirearmService
  ) { }

  ngOnInit() {
    let firearmId = this.route.snapshot.paramMap.get('firearmId')!;

    let param = this.route.snapshot.paramMap.get('reloadId')!;

    if (param == 'add') {
      const reload = new Reload();

      this.reload$ = new BehaviorSubject(reload);

      if (firearmId) {
        this.hasFirearm = true;

        this.firearm$ = this.firearmService.getFirearm(+firearmId).pipe(
          shareReplay(),
          tap(f => reload.casing.cartridge = f.chamber)
          // TODO: set bullet.caliber from above, needs mapping
        );
      }
    } else {
      this.mode = 'edit';
      this.reloadId = +param;

      this.reload$ = this.reloadService.getReload(this.reloadId);
    }

    this.lookups$ = this.reloadService.getEnums();
  }

  onSubmit() {
    console.log('form submitted');

    //this.subscriptions.add(this.reloadService.saveReload(this.reload).subscribe(x => {
    //  // TODO:
    //}));
  }

  // TODO: clone reload functionality
  // TODO: lock cartridge & caliber
}
