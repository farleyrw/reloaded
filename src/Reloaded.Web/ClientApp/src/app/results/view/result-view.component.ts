import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Result } from '@app/models/result';
import { ActivatedRoute } from '@angular/router';
import { Reload } from '../../models/reload';
import { Lookup } from '../../models/lookup';
import { Firearm } from '../../models/firearm';
import { ResultService } from '../services/result.service';
import { ReloadService } from '../../reloads/services/reload.service';
import { FirearmService } from '../../firearms/services/firearm.service';
import { LookupService } from '../../shared/services/lookup.service';

@Component({
  selector: 'app-result-view',
  templateUrl: './result-view.component.html',
  styleUrls: ['./result-view.component.scss']
})
export class ResultViewComponent implements OnInit {
  result$!: Observable<Result>;

  reload$!: Observable<Reload>;

  firearm$!: Observable<Firearm>;

  lookups$!: Observable<Lookup>;

  constructor(
    private resultService: ResultService,
    private reloadService: ReloadService,
    private firearmService: FirearmService,
    private lookupService: LookupService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let reloadResultId = +this.route.snapshot.paramMap.get('reloadResultId')!;

    this.result$ = this.resultService.getResult(reloadResultId)
      .pipe(tap(result => {
        this.reload$ = this.reloadService.getReload(result.reloadId);
        this.firearm$ = this.firearmService.getFirearm(result.firearmId);
      }));

    this.lookups$ = this.lookupService.getEnums();
  }

  getReloadTitle = this.reloadService.getTitle;

  getFirearmTitle = this.firearmService.getTitle;

  hasConditions = this.resultService.hasConditions;
}
