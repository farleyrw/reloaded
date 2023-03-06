import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirearmService } from '@app/shared/services/firearm.service';
import { ReloadService } from '@app/shared/services/reload.service';
import { Reload } from '@app/models/reload';
import { OrderingService } from '@app/shared/pipes/ordering.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reload-edit',
  templateUrl: './reload-edit.component.html',
  styleUrls: ['./reload-edit.component.scss']
})
export class ReloadEditComponent implements OnInit {
  mode: 'edit' | 'add' = 'add';

  reloadId = 0;

  // TODO: replace with observable?
  reload = new Reload();

  lookups!: { [key: string]: string };

  originalOrder = OrderingService.originalOrder;

  subscriptions = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private reloadService: ReloadService,
    private firearmService: FirearmService
  ) { }

  ngOnInit() {
    let firearmId = +this.route.snapshot.paramMap.get('firearmId')!;

    let param = this.route.snapshot.paramMap.get('reloadId')! as any;

    if (!isNaN(param)) {
      this.mode = 'edit';
      this.reloadId = +param;

      this.loadReload(firearmId);
    } else if (param != 'add') {
      // invalid parameter
      console.log('invalid paramter', param);
    }

    this.subscriptions.add(this.reloadService.getEnums().subscribe(enums => this.lookups = enums));
  }

  loadReload(firearmId: number) {
    this.subscriptions.add(this.reloadService.getHandloadForFirearm(firearmId).subscribe(reload => this.reload = reload));
  }


  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
