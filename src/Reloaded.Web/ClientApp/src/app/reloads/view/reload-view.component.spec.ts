import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReloadViewComponent } from './reload-view.component';

describe('ReloadViewComponent', () => {
  let component: ReloadViewComponent;
  let fixture: ComponentFixture<ReloadViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReloadViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReloadViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
