// export class LanguageService {
//   private currentLanguage = 'en';

//   // constructor() {}

//   getCurrentLanguage(): string {
//     return this.currentLanguage;
//   }

//   switchLanguage(language: string): void {
//     if (language === 'en' || language === 'vi') {
//       this.currentLanguage = language;
//     }
//   }
// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguage = new BehaviorSubject<string>('en');

  constructor(private http: HttpClient) {}

  getCurrentLanguage(): string {
    return this.currentLanguage.value;
  }

  setLanguage(lang: string): void {
    this.currentLanguage.next(lang);
  }

  getTranslations(): Observable<any> {
    const lang = this.getCurrentLanguage();
    return this.http.get(`/assets/i18n/${lang}.json`);
  }
}
