import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, Inject, Output, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageServiceService } from '../../languageData.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule, HttpClientModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() openMenuChange: EventEmitter<boolean> = new EventEmitter();

  constructor(public translateService: TranslateService, public languageService: LanguageServiceService) { }

  langBoolean = inject(LanguageServiceService);

  aboutMeOpen = false;
  skillsOpen = false;
  portfolioOpen = false;


  openMenu() {
    this.openMenuChange.emit(true);
  }

  handleClick(event: MouseEvent) {
    event.preventDefault(); // Verhindert das Standardverhalten des Links
    this.openMenu();
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

  changeLanguage(langCode: string) {
    this.langBoolean.changeLanguageService(langCode);
  }
}
