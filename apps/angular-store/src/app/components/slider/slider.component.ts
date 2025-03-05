import {
  Component,
  ViewChild,
  AfterViewInit,
  computed,
  input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { CardComponent } from '../card/card.component';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { ICard } from '../../layouts/layout-blog/layout-blog.component';

@Component({
  selector: 'app-slider',
  imports: [CommonModule, CardComponent],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent implements AfterViewInit {
  @ViewChild('swiperContainer', { static: false }) swiperContainer: any;
  swiper: Swiper | undefined;

  bloc_3 = input<NzSafeAny>({});
  // items = [
  //   {
  //     title: 'Card Title',
  //     subTitle: 'Card Subtitle',
  //     description:
  //       'Some quick example text to build on the card title and make up the bulk of the card content.',
  //     image: 'assets/images/slide1.png',
  //     isCenter: true,
  //   },
  //   {
  //     title: 'Card Title',
  //     subTitle: 'Card Subtitle',
  //     description:
  //       'Some quick example text to build on the card title and make up the bulk of the card content.',
  //     image: 'assets/images/slide2.png',
  //     isCenter: true,
  //   },
  //   {
  //     title: 'Card Title',
  //     subTitle: 'Card Subtitle',
  //     description:
  //       'Some quick example text to build on the card title and make up the bulk of the card content.',
  //     image: 'assets/images/slide3.png',
  //     isCenter: true,
  //   },
  //   {
  //     title: 'Card Title',
  //     subTitle: 'Card Subtitle',
  //     description:
  //       'Some quick example text to build on the card title and make up the bulk of the card content.',
  //     image: 'assets/images/slide4.png',
  //     isCenter: true,
  //   },
  //   {
  //     title: 'Card Title',
  //     subTitle: 'Card Subtitle',
  //     description:
  //       'Some quick example text to build on the card title and make up the bulk of the card content.',
  //     image: 'assets/images/slide1.png',
  //     isCenter: true,
  //   },
  // ];

  cards = computed(() => {
    if (!this.bloc_3()?.cases) return [];
    return this.bloc_3()?.cases?.map((item: ICard, index: number) => {
      return {
        category: item.category,
        description: item.description,
        cta: item.tagline,
        image: `assets/images/slide${index + 1}.png`,
      };
    });
  });

  ngAfterViewInit() {
    this.swiper = new Swiper(this.swiperContainer.nativeElement, {
      modules: [Navigation],
      slidesPerView: 3, // Adjust to show 3 cards at a time
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
  }
}
