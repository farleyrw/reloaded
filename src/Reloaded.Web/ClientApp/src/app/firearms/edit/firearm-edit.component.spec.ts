import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirearmEditComponent } from './firearm-edit.component';

describe('FirearmEditComponent', () => {
  let component: FirearmEditComponent;
  let fixture: ComponentFixture<FirearmEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirearmEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirearmEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
