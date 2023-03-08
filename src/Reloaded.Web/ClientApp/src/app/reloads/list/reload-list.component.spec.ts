import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReloadListComponent } from './reload-list.component';

describe('ReloadListComponent', () => {
  let component: ReloadListComponent;
  let fixture: ComponentFixture<ReloadListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReloadListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReloadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
