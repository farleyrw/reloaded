import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Reload } from '@app/models/reload';
import { Firearm } from '@app/models/firearm';
import { OrderingService } from '@app/shared/pipes/ordering.service';
import { Lookup } from '@app/models/lookup';
import { ReloadService } from '../../reloads/services/reload.service';
import { FirearmService } from '../services/firearm.service';
import { LookupService } from '../../shared/services/lookup.service';

@Component({
  selector: 'app-firearm-view',
  templateUrl: './firearm-view.component.html',
  styleUrls: ['./firearm-view.component.scss']
})
export class FirearmViewComponent implements OnInit {
  reloads$!: Observable<Reload[]>;

  firearm$!: Observable<Firearm>;

  lookups$!: Observable<Lookup>;

  constructor(
    private route: ActivatedRoute,
    private reloadService: ReloadService,
    private firearmService: FirearmService,
    private lookupService: LookupService
  ) { }

  ngOnInit() {
    let firearmId = +this.route.snapshot.paramMap.get('firearmId')!;

    this.reloads$ = this.reloadService.getReloadsForFirearm(firearmId);

    this.firearm$ = this.firearmService.getFirearm(firearmId);

    this.lookups$ = this.lookupService.getEnums();
  }

  originalOrder = OrderingService.originalOrder;
}
