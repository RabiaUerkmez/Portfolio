import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageServiceService {

  constructor(public translateService: TranslateService) { }

  english = true;
  german = false;

  changeLanguageService(langCode: string) {
    this.translateService.use(langCode);
    if (langCode === 'en') {
      this.english = true;
      this.german = false;
    } else if (langCode === 'de') {
      this.english = false;
      this.german = true;
    }
  }
}
