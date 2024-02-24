import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Firearm } from '@app/models/firearm';
import { FirearmService } from '@app/shared/services/firearm.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { OrderingService } from '@app/shared/pipes/ordering.service';
import { Lookup } from '@app/models/lookup';

@Component({
  selector: 'app-firearm-edit',
  templateUrl: './firearm-edit.component.html',
  styleUrls: ['./firearm-edit.component.scss']
})
export class FirearmEditComponent implements OnInit {
  mode: 'edit' | 'add' = 'add';
  
  firearm$!: Observable<Firearm>;
  
  lookups$!: Observable<Lookup>;

  originalOrder = OrderingService.originalOrder;
  
  constructor(private firearmService: FirearmService, private route: ActivatedRoute) { }

  ngOnInit() {
    let param = this.route.snapshot.paramMap.get('firearmId')!;

    if (param != 'add') {
      this.mode = 'edit';

      this.firearm$ = this.firearmService.getFirearm(+param);
    } else {
      this.firearm$ = new BehaviorSubject(new Firearm());
    }
    
    this.lookups$ = this.firearmService.getEnums();
  }
  
  onSubmit() {
    console.log('form submitted');

    //this.subscriptions.add(this.firearmService.saveFirearm(this.firearm).subscribe(x => {
    //  // TODO:
    //}));
  }
}
