import { Component } from '@angular/core';
import { AboutMeComponent } from './about-me/about-me.component';
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { ScrollComponent } from "./scroll/scroll.component";
import { SkillsComponent } from "./skills/skills.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ContactComponent } from "./contact/contact.component";

@Component({
    selector: 'app-components',
    standalone: true,
    templateUrl: './components.component.html',
    styleUrl: './components.component.scss',
    imports: [AboutMeComponent, LandingPageComponent, ScrollComponent, SkillsComponent, PortfolioComponent, ContactComponent]
})
export class ComponentsComponent {

}
