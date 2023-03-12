import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Result } from '@app/models/result';
import { ResultService } from '@app/shared/services/result.service';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss']
})
export class ResultListComponent implements OnInit {
  results$!: Observable<Result[]>;

  constructor(private resultsService: ResultService) { }

  ngOnInit() {
    this.results$ = this.resultsService.getResults();
  }

}
