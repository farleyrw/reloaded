import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResultService } from '@app/shared/services/result.service';
import { Observable, Subscription } from 'rxjs';
import { Lookup } from '@app/models/lookup';
import { Result } from '@app/models/result';
import { ReloadService } from '@app/shared/services/reload.service';

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

  lookups$!: Observable<Lookup>;

  subscriptions = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private resultService: ResultService,
    private reloadService: ReloadService
  ) { }

  ngOnInit() {
    let param = this.route.snapshot.paramMap.get('resultId')!;

    if (param == 'add') {
      this.result = new Result();

      let reloadId = this.route.snapshot.queryParamMap.get('reloadId');

      if (reloadId) {
        this.result.reloadId = +reloadId;
      }

      let firearmId = this.route.snapshot.queryParamMap.get('firearmId');

      if (firearmId) {
        this.result.firearmId = +firearmId;
      }
    } else {
      this.mode = 'edit';
      this.subscriptions.add(this.resultService.getResult(+param).subscribe(result => this.result = result));
    }

    this.lookups$ = this.reloadService.getEnums();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  onSubmit() {

  }
  /* TODO:
    Must handle with and without reload and firearm Ids
  */
}
