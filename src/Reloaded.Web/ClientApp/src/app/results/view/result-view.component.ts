import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Result } from '@app/models/result';
import { ResultService } from '@app/shared/services/result.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result-view',
  templateUrl: './result-view.component.html',
  styleUrls: ['./result-view.component.scss']
})
export class ResultViewComponent implements OnInit {
  result$!: Observable<Result>;

  constructor(
    private resultService: ResultService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let reloadResultId = +this.route.snapshot.paramMap.get('reloadResultId')!;

    this.result$ = this.resultService.getResult(reloadResultId);
  }
}
