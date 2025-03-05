import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutExploreComponent } from './layout-explore.component';

describe('LayoutExploreComponent', () => {
  let component: LayoutExploreComponent;
  let fixture: ComponentFixture<LayoutExploreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutExploreComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
