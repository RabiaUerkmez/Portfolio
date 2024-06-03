import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MainContentComponent } from "./main-content/main-content.component";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FooterComponent } from "./main-content/footer/footer.component";
import { HttpClientModule } from '@angular/common/http';
import { BurgerMenuComponent } from "./main-content/burger-menu/burger-menu.component";
import { HeaderComponent } from "./main-content/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, RouterOutlet, TranslateModule, MainContentComponent, FooterComponent, HttpClientModule, BurgerMenuComponent, HeaderComponent]
})
export class AppComponent implements OnInit {
  title = 'Rabia Ürkmez';
  burgerMenuOpen = false;

  constructor(public translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    AOS.init();
  }
}
