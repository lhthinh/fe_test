import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-section',
  imports: [CommonModule],
  templateUrl: './header-section.component.html',
  styleUrl: './header-section.component.scss',
})
export class HeaderSectionComponent {

  title = input<string>('Titre Bloc 1');
  subTitle = input<string>('Sous-titre Bloc 1');
}
