import { Component, EventEmitter, Output, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageServiceService } from '../../languageData.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-burger-menu',
  standalone: true,
  imports: [CommonModule, TranslateModule, HttpClientModule],
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.scss']
})
export class BurgerMenuComponent {
  @Output() burgerMenuClosed: EventEmitter<boolean> = new EventEmitter();

  public aboutMeOpen = false;
  public skillsOpen = false;
  public portfolioOpen = false;

  constructor(public translateService: TranslateService, public languageService: LanguageServiceService) {}

  changeLanguage(langCode: string): void {
    this.languageService.changeLanguageService(langCode);
  }

  closeBurger(): void {
    this.burgerMenuClosed.emit(false);
    document.body.style.overflow = 'auto';
  }

  setAboutMeOpen(): void {
    this.aboutMeOpen = true;
    this.skillsOpen = false;
    this.portfolioOpen = false;
  }

  setSkillsOpen(): void {
    this.aboutMeOpen = false;
    this.skillsOpen = true;
    this.portfolioOpen = false;
  }

  setPortfolioOpen(): void {
    this.aboutMeOpen = false;
    this.skillsOpen = false;
    this.portfolioOpen = true;
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const header = document.querySelector('.bg') as HTMLElement;
    const offset = window.scrollY;
    if (header) {
      header.style.top = `${offset}px`;
    }
  }
}