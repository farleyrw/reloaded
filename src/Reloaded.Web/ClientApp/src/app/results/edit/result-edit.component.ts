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

  maxDate = new Date();
  minDate = (new Date().getFullYear() - 1).toString() + "-01-01";

  result!: Result;
  firearm$!: Observable<Firearm>;
  reload$!: Observable<Reload>;

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

    let reloadId = +this.route.snapshot.queryParamMap.get('reloadId')!;
    let firearmId = +this.route.snapshot.queryParamMap.get('firearmId')!;

    if (param == 'add') {
      if (!reloadId && !firearmId) {
        // TODO: invalid state
      }

      this.result = new Result();

      this.result.reloadId = reloadId;
      this.result.firearmId = firearmId;
    } else {
      this.mode = 'edit';
      this.subscriptions.add(this.resultService.getResult(+param).subscribe(result => this.result = result));
    }

    this.lookups$ = this.reloadService.getEnums();
    this.firearm$ = this.firearmService.getFirearm(firearmId);
    this.reload$ = this.reloadService.getReload(reloadId);
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
