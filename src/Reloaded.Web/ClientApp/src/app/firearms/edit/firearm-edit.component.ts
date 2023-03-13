import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Firearm } from '@app/models/firearm';
import { FirearmService } from '@app/shared/services/firearm.service';
import { Observable, Subscription } from 'rxjs';
import { OrderingService } from '@app/shared/pipes/ordering.service';
import { Lookup } from '@app/models/lookup';

@Component({
  selector: 'app-firearm-edit',
  templateUrl: './firearm-edit.component.html',
  styleUrls: ['./firearm-edit.component.scss']
})
export class FirearmEditComponent implements OnInit, OnDestroy {
  mode: 'edit' | 'add' = 'add';

  firearmId = 0;

  // TODO: replace with observable?
  firearm = new Firearm();

  lookups$!: Observable<Lookup>;

  originalOrder = OrderingService.originalOrder;

  subscriptions = new Subscription();

  constructor(private firearmService: FirearmService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscriptions.add(this.route.params.subscribe(params => {
      let param = params.firearmId;

      if (!isNaN(param)) {
        this.mode = 'edit';
        this.firearmId = +param;

        this.loadFirearm();
      } else if (param != 'add') {
        // invalid parameter
        console.log('invalid paramter', param);
      }
    }));

    this.lookups$ = this.firearmService.getEnums();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  loadFirearm() {
    this.subscriptions.add(this.firearmService.getFirearm(this.firearmId).subscribe(firearm => this.firearm = firearm));
  }

  onSubmit() {
    console.log('form submitted');

    //this.subscriptions.add(this.firearmService.saveFirearm(this.firearm).subscribe(x => {
    //  // TODO:
    //}));
  }
}
