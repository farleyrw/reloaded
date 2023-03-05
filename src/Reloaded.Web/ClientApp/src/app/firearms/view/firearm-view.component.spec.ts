import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FirearmViewComponent } from './firearm-view.component';

describe('FirearmEditComponent', () => {
  let component: FirearmViewComponent;
  let fixture: ComponentFixture<FirearmViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirearmViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirearmViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
