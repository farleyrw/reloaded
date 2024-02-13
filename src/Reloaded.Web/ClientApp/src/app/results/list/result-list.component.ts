import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Result } from '@app/models/result';
import { ResultService } from '@app/shared/services/result.service';
import { ActivatedRoute } from '@angular/router';
import { ReloadService } from '../../shared/services/reload.service';
import { Reload } from '../../models/reload';
import { Lookup } from '../../models/lookup';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss']
})
export class ResultListComponent implements OnInit {
  results$!: Observable<Result[]>;

  reload$!: Observable<Reload>;

  lookups$!: Observable<Lookup>;

  reloadFiltered = false;
  firearmFiltered = false;

  constructor(
    private route: ActivatedRoute,
    private resultService: ResultService,
    private reloadService: ReloadService
  ) { }

  ngOnInit() {
    let reloadId = this.route.snapshot.queryParamMap.get('reloadId')!;

    if (reloadId) {
      this.results$ = this.resultService.getResultsForReload(+reloadId);
      this.reload$ = this.reloadService.getReload(+reloadId);
      this.lookups$ = this.reloadService.getEnums();
      this.reloadFiltered = true;
    } else {
      this.results$ = this.resultService.getResults();
    }
  }

  getReloadTitle = this.reloadService.getTitle;

}
