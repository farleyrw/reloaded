import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResultService } from '@app/shared/services/result.service';
import { BehaviorSubject, Observable, tap } from 'rxjs';
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
export class ResultEditComponent implements OnInit {

  mode: 'add' | 'edit' = 'add';

  needsFirearmSelection = false;

  reloadMissing = false;
  firearmMissing = false;

  maxDate = new Date();
  minDate = new Date((new Date().getFullYear() - 1).toString() + "-01-01");
  
  result$!: Observable<Result>;
  firearm$!: Observable<Firearm>;
  firearms$!: Observable<Firearm[]>;
  reload$!: Observable<Reload>;

  lookups$!: Observable<Lookup>;
  
  constructor(
    private route: ActivatedRoute,
    private resultService: ResultService,
    private reloadService: ReloadService,
    private firearmService: FirearmService
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
        this.firearm$ = this.firearmService.getFirearm(result.firearmId);
        this.reload$ = this.reloadService.getReload(result.reloadId);
      }));
    }
    
    this.lookups$ = this.reloadService.getEnums();
  }
  
  onSubmit() {

  }
  
  getReloadTitle = this.reloadService.getTitle;

  getFirearmTitle = this.firearmService.getTitle;

  /* TODO:
    Must handle with and without reload and firearm Ids
  */
}
