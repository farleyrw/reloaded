import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Result } from '@app/models/result';
import { ResultService } from '@app/shared/services/result.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ReloadService } from '../../shared/services/reload.service';
import { Reload } from '../../models/reload';
import { Lookup } from '../../models/lookup';
import { Firearm } from '../../models/firearm';
import { FirearmService } from '../../shared/services/firearm.service';

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
    private firearmSerivce: FirearmService
  ) { }

  ngOnInit() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

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
    this.lookups$ = this.reloadService.getEnums();
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

}
