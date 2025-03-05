import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from '../../components/calendar/calendar.component';
import { HeaderSectionComponent } from '../../components/header-section/header-section.component';

@Component({
  selector: 'app-layout-calendar',
  imports: [CommonModule, CalendarComponent, HeaderSectionComponent],
  templateUrl: './layout-calendar.component.html',
  styleUrl: './layout-calendar.component.scss',
})
export class LayoutCalendarComponent {}
