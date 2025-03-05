import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutExperienceComponent } from './layout-experience.component';

describe('LayoutExperienceComponent', () => {
  let component: LayoutExperienceComponent;
  let fixture: ComponentFixture<LayoutExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutExperienceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
