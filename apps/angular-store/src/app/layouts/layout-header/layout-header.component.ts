import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
@Component({
  selector: 'app-layout-header',
  imports: [CommonModule, HeaderComponent, NavBarComponent],
  templateUrl: './layout-header.component.html',
  styleUrl: './layout-header.component.scss',
})
export class LayoutHeaderComponent {

  changeLanguage = output<string>();


  bannerMenu = input<string[]>();
  bannerTitle = input<string[]>();
}
