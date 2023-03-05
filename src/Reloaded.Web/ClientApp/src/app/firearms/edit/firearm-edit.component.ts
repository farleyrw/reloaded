import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Firearm } from '@app/models/firearm';
import { FirearmService } from '@app/shared/services/firearm.service';

@Component({
  selector: 'app-firearm-edit',
  templateUrl: './firearm-edit.component.html',
  styleUrls: ['./firearm-edit.component.scss']
})
export class FirearmEditComponent implements OnInit {
  mode: 'edit' | 'add' = 'add';

  firearmId = 0;

  firearm = new Firearm();

  constructor(private firearmService: FirearmService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let param = params.id;

      if (!isNaN(param)) {
        this.mode = 'edit';
        this.firearmId = +param;

        this.loadFirearm();
      } else if (param != 'add') {
        // invalid parameter
        console.log('invalid paramter', param);
      }
    });
  }

  loadFirearm() {
    // http service call

    this.firearmService.getFirearm(this.firearmId).subscribe(firearm => this.firearm = firearm);
  }
}
