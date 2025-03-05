import { Component, computed, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';
import { HeaderSectionComponent } from '../../components/header-section/header-section.component';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

@Component({
  selector: 'app-layout-blog',
  imports: [CommonModule, CardComponent, HeaderSectionComponent],
  templateUrl: './layout-blog.component.html',
  styleUrl: './layout-blog.component.scss',
})
export class LayoutBlogComponent {
  bloc_1 = input<NzSafeAny>({});

  cards = computed(() => {
    if(!this.bloc_1()?.cases) return [];
    return this.bloc_1()?.cases?.map((item: ICard, index: number) => {
      return {
        category: item.category,
        cta: item.tagline,
        description: item.description,
        tagline: item.tagline,
        image: `assets/images/image${index + 1}.png`,
        iconBtn: 'assets/icons/ArrowUpRightGreen.svg',
        isUp: index === 1,
      };
    });
  });
}

export interface ICard {
  category: string;
  cta: string;
  description: string;
  tagline: string;
  image: string;
  iconBtn: string;
  isUp?: boolean;
}
