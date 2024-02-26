import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Result } from '@app/models/result';
import { ActivatedRoute, Router } from '@angular/router';
import { Reload } from '../../models/reload';
import { Lookup } from '../../models/lookup';
import { Firearm } from '../../models/firearm';
import { ResultService } from '../services/result.service';
import { ReloadService } from '../../reloads/services/reload.service';
import { FirearmService } from '../../firearms/services/firearm.service';
import { LookupService } from '../../shared/services/lookup.service';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss']
})
export class ResultListComponent implements OnInit {
  results$!: Observable<Result[]>;

  reload$!: Observable<Reload>;

  firearms$!: Observable<Firearm[]>;
  reloads$!: Observable<Reload[]>;
  lookups$!: Observable<Lookup>;

  reloadFiltered = false;
  firearmFiltered = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private resultService: ResultService,
    private reloadService: ReloadService,
    private firearmSerivce: FirearmService,
    private lookupService: LookupService
  ) { }

  ngOnInit() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false; // hack to force reload alert dismiss

    let reloadId = this.route.snapshot.queryParamMap.get('reloadId')!;

    if (reloadId) {
      this.results$ = this.resultService.getResultsForReload(+reloadId);
      this.reload$ = this.reloadService.getReload(+reloadId);
      this.reloads$ = new BehaviorSubject([]);
      this.reloadFiltered = true;
    } else {
      this.results$ = this.resultService.getResults();
      this.reloads$ = this.reloadService.getReloads();
    }

    this.firearms$ = this.firearmSerivce.getFirearms();
    this.lookups$ = this.lookupService.getEnums();
  }

  clearReloadFilter() {
    this.router.navigate(['/results']);
  }

  getReloadTitle(reloadId: number, reloads: Reload[], lookup: Lookup): string {
    const reload = reloads.filter(r => r.reloadId == reloadId)[0];

    return reload && this.reloadService.getTitle(reload, lookup);
  }

  getFirearmTitle(firearmId: number, firearms: Firearm[]): string {
    const firearm = firearms.filter(f => f.firearmId == firearmId)[0];

    return firearm && this.firearmSerivce.getTitle(firearm);
  }

  getReloadTitleSingle = this.reloadService.getTitle;

  orderResults(resultA: Result, resultB: Result): number {
    return resultA.date > resultB.date ? -1 : 1;
  }
  
}
