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


  /**
   * Opens the menu by emitting an event to change the menu state and 
   * setting the body's overflow style to 'hidden' to prevent scrolling.
   */
  openMenu() {
    this.openMenuChange.emit(true);
    document.body.style.overflow = 'hidden';
  }

  /**
   * Handles the click event on the header component.
   * 
   * @param event - The mouse event triggered by the click.
   * @remarks
   * This method prevents the default behavior of the link and opens the menu.
   */
  handleClick(event: MouseEvent) {
    event.preventDefault(); // Verhindert das Standardverhalten des Links
    this.openMenu();
  }

  /**
   * Opens the "About Me" section and closes the "Skills" and "Portfolio" sections.
   * 
   * This method sets the `aboutMeOpen` property to `true` and ensures that both
   * `skillsOpen` and `portfolioOpen` properties are set to `false`.
   */
  setAboutMeOpen() {
    this.aboutMeOpen = true;
    this.skillsOpen = false;
    this.portfolioOpen = false;
  }

  /**
   * Sets the state to open the skills section while closing the about me and portfolio sections.
   * This method updates the component's state by setting `aboutMeOpen` to `false`,
   * `skillsOpen` to `true`, and `portfolioOpen` to `false`.
   */
  setSkillsOpen() {
    this.aboutMeOpen = false;
    this.skillsOpen = true;
    this.portfolioOpen = false;
  }

  /**
   * Sets the portfolio section to open while closing the about me and skills sections.
   * This method ensures that only the portfolio section is visible.
   */
  setPortfolioOpen() {
    this.aboutMeOpen = false;
    this.skillsOpen = false;
    this.portfolioOpen = true;
  }

  /**
   * Changes the application's language.
   *
   * @param langCode - The language code to switch to (e.g., 'en' for English, 'de' for German).
   * 
   */
  changeLanguage(langCode: string) {
    this.langBoolean.changeLanguageService(langCode);
  }
}
