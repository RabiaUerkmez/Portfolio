import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageServiceService } from '../../languageData.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-burger-menu',
  standalone: true,
  imports: [CommonModule, TranslateModule, HttpClientModule],
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.scss'
})
export class BurgerMenuComponent {
  @Output() burgerMenuClosed: EventEmitter<boolean> = new EventEmitter();
  langBoolean = inject(LanguageServiceService);

  constructor(public translateService: TranslateService, public languageService: LanguageServiceService) { }
  
  aboutMeOpen = false;
  skillsOpen = false;
  portfolioOpen = false;

  changeLanguage(langCode: string) {
    this.langBoolean.changeLanguageService(langCode);
    }

  closeBurger() {
    this.burgerMenuClosed.emit(false);
  }

  setAboutMeOpen() {
    this.aboutMeOpen = true;
    this.skillsOpen = false;
    this.portfolioOpen = false;
  }

  setSkillsOpen() {
    this.aboutMeOpen = false;
    this.skillsOpen = true;
    this.portfolioOpen = false;
  }

  setPortfolioOpen() {
    this.aboutMeOpen = false;
    this.skillsOpen = false;
    this.portfolioOpen = true;
  }
}
