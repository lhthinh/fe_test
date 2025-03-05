import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutSlidesComponent } from './layout-slides.component';

describe('LayoutSlidesComponent', () => {
  let component: LayoutSlidesComponent;
  let fixture: ComponentFixture<LayoutSlidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutSlidesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutSlidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
