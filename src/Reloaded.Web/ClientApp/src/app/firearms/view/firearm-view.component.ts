import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Reload } from '@app/models/reload';
import { FirearmService } from '@app/shared/services/firearm.service';
import { ReloadService } from '@app/shared/services/reload.service';
import { Firearm } from '@app/models/firearm';
import { OrderingService } from '@app/shared/pipes/ordering.service';
import { Lookup } from '@app/models/lookup';

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
    private firearmService: FirearmService
  ) { }

  ngOnInit() {
    let firearmId = +this.route.snapshot.paramMap.get('firearmId')!;

    this.reloads$ = this.reloadService.getReloadsForFirearm(firearmId);

    this.firearm$ = this.firearmService.getFirearm(firearmId);

    this.lookups$ = this.reloadService.getEnums();
  }

  originalOrder = OrderingService.originalOrder;
}
