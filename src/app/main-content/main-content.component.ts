import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { ComponentsComponent } from "./components/components.component";
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';
import { CommonModule } from '@angular/common';
import { PrivacyComponent } from "./privacy/privacy.component";

@Component({
    selector: 'app-main-content',
    standalone: true,
    templateUrl: './main-content.component.html',
    styleUrl: './main-content.component.scss',
    imports: [CommonModule, HeaderComponent, ComponentsComponent, BurgerMenuComponent, PrivacyComponent]
})
export class MainContentComponent {
    burgerMenuOpen = false;
}
