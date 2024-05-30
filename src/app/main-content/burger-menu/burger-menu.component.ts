import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-burger-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.scss'
})
export class BurgerMenuComponent {
  @Output() burgerMenuClosed: EventEmitter<boolean> = new EventEmitter();

  aboutMeOpen = false;
  skillsOpen = false;
  portfolioOpen = false;

  closeBurger() {
    console.log('so sollte es schließen');
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
