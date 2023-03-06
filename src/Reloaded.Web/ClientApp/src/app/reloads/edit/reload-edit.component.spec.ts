import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReloadEditComponent } from './reload-edit.component';

describe('ReloadEditComponent', () => {
  let component: ReloadEditComponent;
  let fixture: ComponentFixture<ReloadEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReloadEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReloadEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
