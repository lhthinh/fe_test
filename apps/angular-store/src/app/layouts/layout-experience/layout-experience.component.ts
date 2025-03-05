import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout-experience',
  imports: [CommonModule],
  templateUrl: './layout-experience.component.html',
  styleUrl: './layout-experience.component.scss',
})
export class LayoutExperienceComponent {
  features = [
    { icon: 'assets/icons/authen.svg', title: 'Authenticité', subtitle: 'Sous-titre' },
    { icon: 'assets/icons/respect.svg', title: 'Respect', subtitle: 'Sous-titre' },
    { icon: 'assets/icons/container.svg', title: 'Diversité', subtitle: 'Sous-titre' },
    { icon: 'assets/icons/person.svg', title: 'Personnalisation', subtitle: 'Sous-titre' },
    { icon: 'assets/icons/smile.svg', title: 'Confort', subtitle: 'Sous-titre' }
  ];
}
