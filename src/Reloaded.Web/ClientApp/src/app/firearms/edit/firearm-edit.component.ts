import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Reload } from '@app/models/reload';
import { FirearmService } from '@app/shared/services/firearm.service';
import { ReloadService } from '@app/shared/services/reload.service';
import { Firearm } from '@app/models/firearm';

@Component({
  selector: 'app-firearm-edit',
  templateUrl: './firearm-edit.component.html',
  styleUrls: ['./firearm-edit.component.scss']
})
export class FirearmEditComponent implements OnInit {
  reloads$!: Observable<Reload[]>;

  firearm$!: Observable<Firearm>;

  constructor(
    private route: ActivatedRoute,
    private reloadService: ReloadService,
    private firearmService: FirearmService
  ) { }

  ngOnInit() {
    let firearmId = this.route.snapshot.paramMap.get('id')!;

    this.reloads$ = this.reloadService.getHandloadsForFirearm(firearmId);

    this.firearm$ = this.firearmService.getFirearm(firearmId);
  }
}
