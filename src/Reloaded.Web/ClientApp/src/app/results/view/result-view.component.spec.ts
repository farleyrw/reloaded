import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultViewComponent } from './result-view.component';

describe('ResultsViewComponent', () => {
  let component: ResultViewComponent;
  let fixture: ComponentFixture<ResultViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
