import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutCalendarComponent } from './layout-calendar.component';

describe('LayoutCalendarComponent', () => {
  let component: LayoutCalendarComponent;
  let fixture: ComponentFixture<LayoutCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutCalendarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
