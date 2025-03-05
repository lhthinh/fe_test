import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-calendar',
  imports: [CommonModule, FormsModule, FullCalendarModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent {
  formData = {
    name: '',
    email: '',
    message: '',
    file: null as File | null
  };

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    headerToolbar: {
      left: 'prev',
      center: 'title',
      right: 'next'
    },
    events: [
      { title: 'Occupé', start: '2025-07-01', className: 'occupied' },
      { title: 'Libre', start: '2025-07-05', className: 'libre' },
      { title: 'Libre', start: '2025-07-10', className: 'libre' },
      { title: 'Libre', start: '2025-07-12', className: 'libre' }
    ],
    contentHeight: '500px'
  };

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      this.formData.file = file;
    } else {
      alert('Seuls les fichiers PDF sont autorisés.');
    }
  }

  submitForm() {
    console.log('Form Data:', this.formData);
    alert('Formulaire soumis avec succès !');
  }

  clearForm() {
    this.formData = {
      name: '',
      email: '',
      message: '',
      file: null
    };
  }
}
