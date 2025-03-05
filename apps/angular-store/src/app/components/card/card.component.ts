import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICard } from '../../layouts/layout-blog/layout-blog.component';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {

  card = input.required<ICard>();
}
