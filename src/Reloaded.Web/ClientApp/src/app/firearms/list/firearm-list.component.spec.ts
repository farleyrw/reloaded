import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirearmListComponent } from './firearm-list.component';

describe('FirearmListComponent', () => {
  let component: FirearmListComponent;
  let fixture: ComponentFixture<FirearmListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirearmListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirearmListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
