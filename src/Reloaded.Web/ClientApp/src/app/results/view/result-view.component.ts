import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Result } from '@app/models/result';
import { ResultService } from '@app/shared/services/result.service';
import { ActivatedRoute } from '@angular/router';
import { Reload } from '../../models/reload';
import { ReloadService } from '../../shared/services/reload.service';
import { Lookup } from '../../models/lookup';
import { Firearm } from '../../models/firearm';
import { FirearmService } from '../../shared/services/firearm.service';

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
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let reloadResultId = +this.route.snapshot.paramMap.get('reloadResultId')!;

    this.result$ = this.resultService.getResult(reloadResultId)
      .pipe(tap(result => {
        this.reload$ = this.reloadService.getReload(result.reloadId);
        this.firearm$ = this.firearmService.getFirearm(result.firearmId);
      }));

    this.lookups$ = this.reloadService.getEnums();
  }

  getReloadTitle = this.reloadService.getTitle;

  getFirearmTitle = this.firearmService.getTitle;
}
