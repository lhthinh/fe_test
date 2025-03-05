import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutMapsComponent } from './layout-maps.component';

describe('LayoutMapsComponent', () => {
  let component: LayoutMapsComponent;
  let fixture: ComponentFixture<LayoutMapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutMapsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
