import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResultService } from '@app/shared/services/result.service';
import { Observable, Subscription } from 'rxjs';
import { Lookup } from '@app/models/lookup';
import { Result } from '@app/models/result';
import { ReloadService } from '@app/shared/services/reload.service';
import { Firearm } from '@app/models/firearm';
import { Reload } from '@app/models/reload';
import { FirearmService } from '@app/shared/services/firearm.service';

@Component({
  selector: 'app-result-edit',
  templateUrl: './result-edit.component.html',
  styleUrls: ['./result-edit.component.scss']
})
export class ResultEditComponent implements OnInit, OnDestroy {

  mode: 'add' | 'edit' = 'add';

  needsFirearmSelection = false;

  maxDate = new Date();
  minDate = (new Date().getFullYear() - 1).toString() + "-01-01";

  result!: Result;
  firearm$!: Observable<Firearm>;
  firearms$!: Observable<Firearm[]>;
  reload!: Reload;

  lookups$!: Observable<Lookup>;

  subscriptions = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private resultService: ResultService,
    private reloadService: ReloadService,
    private firearmService: FirearmService
  ) { }

  ngOnInit() {
    let param = this.route.snapshot.paramMap.get('resultId')!;

    let reloadId = this.route.snapshot.queryParamMap.get('reloadId')!;

    if (!reloadId) {
      // TODO: invalid state
    }

    let firearmId = this.route.snapshot.queryParamMap.get('firearmId')!;

    if (!firearmId) {
      this.needsFirearmSelection = true;
    }

    if (param == 'add') {
      this.result = new Result();
      this.result.reloadId = +reloadId;

      if (!this.needsFirearmSelection) {
        this.result.firearmId = +firearmId;
        this.firearm$ = this.firearmService.getFirearm(firearmId);
      } else {
        // TODO: how to call from the results of getReload below
      }
    } else {
      this.mode = 'edit';
      this.subscriptions.add(this.resultService.getResult(param).subscribe(result => this.result = result));
    }

    this.lookups$ = this.reloadService.getEnums();
    this.subscriptions.add(this.reloadService.getReload(reloadId).subscribe(result => {
      this.reload = result;

      if (this.mode == 'add' && this.needsFirearmSelection) {
        this.firearms$ = this.firearmService.getFirearmsByCartridge(this.reload.casing.cartridge);
      }
    }));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  onSubmit() {

  }

  getReloadDescription(reload: Reload) {
    let reloadMain = `${reload.powderCharge} gr ${reload.powder}, ${reload.bullet.weight} gr ${reload.bullet.brand}`;

    if (reload.nickname) {
      return `${reload.nickname} (${reloadMain})`;
    }

    return reloadMain;
  }

  /* TODO:
    Must handle with and without reload and firearm Ids
  */
}
