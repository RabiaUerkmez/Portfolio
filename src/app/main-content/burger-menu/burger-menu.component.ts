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

  constructor(public translateService: TranslateService, public languageService: LanguageServiceService) { }

  /**
   * Changes the application's language.
   *
   * @param langCode - The language code to switch to (e.g., 'en' for English, 'de' for German).
   * @returns void
   */
  changeLanguage(langCode: string): void {
    this.languageService.changeLanguageService(langCode);
  }

  /**
   * Closes the burger menu and restores the body's overflow style to 'auto'.
   * Emits an event to indicate that the burger menu has been closed.
   */
  closeBurger(): void {
    this.burgerMenuClosed.emit(false);
    document.body.style.overflow = 'auto';
  }

  /**
   * Sets the state to open the "About Me" section and closes the "Skills" and "Portfolio" sections.
   * 
   * This method updates the component's state by setting `aboutMeOpen` to `true` and 
   * `skillsOpen` and `portfolioOpen` to `false`.
   */
  setAboutMeOpen(): void {
    this.aboutMeOpen = true;
    this.skillsOpen = false;
    this.portfolioOpen = false;
  }

  /**
   * Sets the state to open the skills section while closing the about me and portfolio sections.
   * 
   * This method updates the component's state by setting `aboutMeOpen` to `false`,
   * `skillsOpen` to `true`, and `portfolioOpen` to `false`.
   */
  setSkillsOpen(): void {
    this.aboutMeOpen = false;
    this.skillsOpen = true;
    this.portfolioOpen = false;
  }

  /**
   * Sets the portfolio section to open while closing the about me and skills sections.
   * This method ensures that only the portfolio section is visible.
   */
  setPortfolioOpen(): void {
    this.aboutMeOpen = false;
    this.skillsOpen = false;
    this.portfolioOpen = true;
  }

  /**
   * This function listens for the scroll event and sets the top position of the header.
   */

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const header = document.querySelector('.bg') as HTMLElement;
    const offset = window.scrollY;
    if (header) {
      header.style.top = `${offset}px`;
    }
  }
}