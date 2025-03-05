import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from '../../components/slider/slider.component';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

@Component({
  selector: 'app-layout-slides',
  imports: [CommonModule, SliderComponent],
  templateUrl: './layout-slides.component.html',
  styleUrl: './layout-slides.component.scss',
})
export class LayoutSlidesComponent {

  bloc_3 = input<NzSafeAny>({});
}
