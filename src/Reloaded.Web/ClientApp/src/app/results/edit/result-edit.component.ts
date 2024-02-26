import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Lookup } from '@app/models/lookup';
import { Result } from '@app/models/result';
import { Firearm } from '@app/models/firearm';
import { Reload } from '@app/models/reload';
import { NgbCalendar, NgbDateAdapter, NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { ResultService } from '../services/result.service';
import { ReloadService } from '../../reloads/services/reload.service';
import { FirearmService } from '../../firearms/services/firearm.service';
import { LookupService } from '../../shared/services/lookup.service';

@Component({
  selector: 'app-result-edit',
  templateUrl: './result-edit.component.html',
  styleUrls: ['./result-edit.component.scss'],
  providers: [{ provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }]
})
export class ResultEditComponent implements OnInit {

  mode: 'add' | 'edit' = 'add';

  needsFirearmSelection = false;

  reloadMissing = false;
  firearmMissing = false;

  maxDate = this.calendar.getToday();
  minDate = this.calendar.getNext(this.maxDate, 'y', -1);

  disabledDate = new Date(new Date().setFullYear(new Date().getFullYear() - 1)); // 1yr ago
  
  result$!: Observable<Result>;
  firearm$!: Observable<Firearm>;
  firearms$!: Observable<Firearm[]>;
  reload$!: Observable<Reload>;

  lookups$!: Observable<Lookup>;
  
  constructor(
    private route: ActivatedRoute,
    private resultService: ResultService,
    private reloadService: ReloadService,
    private firearmService: FirearmService,
    private lookupService: LookupService,
    private calendar: NgbCalendar
  ) { }

  ngOnInit() {
    let param = this.route.snapshot.paramMap.get('resultId')!;

    if (param == 'add') {
      let reloadId = this.route.snapshot.queryParamMap.get('reloadId')!;

      let firearmId = this.route.snapshot.queryParamMap.get('firearmId')!;

      if (!reloadId) {
        this.reloadMissing = true;
      }

      let result = new Result();
      result.reloadId = +reloadId;

      if (!firearmId) {
        this.needsFirearmSelection = true;
      } else {
        result.firearmId = +firearmId;
      }

      this.result$ = new BehaviorSubject(result);

      this.reload$ = this.reloadService.getReload(+reloadId)
        .pipe(tap(reload => {
          if (this.needsFirearmSelection) {
            this.firearms$ = this.firearmService.getFirearmsByCartridge(reload.casing.cartridge);
          } else {
            this.firearm$ = this.firearmService.getFirearm(firearmId);
          }
        }));
    } else {
      this.mode = 'edit';
      
      this.result$ = this.resultService.getResult(+param).pipe(
        tap(result => {
          this.reload$ = this.reloadService.getReload(result.reloadId);
          this.firearm$ = this.firearmService.getFirearm(result.firearmId);
      }));
    }

    this.lookups$ = this.lookupService.getEnums();
  }
  
  onSubmit() {
    // TODO:

  }
  
  getReloadTitle = this.reloadService.getTitle;

  getFirearmTitle = this.firearmService.getTitle;
}
