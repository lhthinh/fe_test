import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout-gallery',
  imports: [CommonModule],
  templateUrl: './layout-gallery.component.html',
  styleUrl: './layout-gallery.component.scss',
})
export class LayoutGalleryComponent {

  galleryItems = [
    { image: 'assets/images/avocado.png', name: 'Anthony Durand' },
    { image: 'assets/images/cherry.png', name: 'Anthony Durand' },
    { image: 'assets/images/orange.png', name: 'Anthony Durand' },
    { image: 'assets/images/halfOrange.png', name: 'Anthony Durand' }
  ];
}
