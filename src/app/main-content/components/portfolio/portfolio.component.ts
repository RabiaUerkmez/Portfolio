import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-portfolio',
    standalone: true,
    templateUrl: './portfolio.component.html',
    styleUrl: './portfolio.component.scss',
    imports: [CommonModule, TranslateModule, HttpClientModule]
})
export class PortfolioComponent {
    constructor(public translateService: TranslateService) { }
    /**
     * An array of project objects representing different portfolio projects.
     * Each project contains the following properties:
     * 
     * @property {string} name - The name of the project.
     * @property {string} tech - The technologies used in the project.
     * @property {string} descriptionKey - The key for the project's description in the translation file.
     * @property {string} link - The URL link to the live project.
     * @property {string} git - The URL link to the project's GitHub repository.
     * @property {string} img - The filename of the project's image.
     */
    projects = [
        {
            name: 'DABubble',
            tech: 'HTML | SCSS | Angular | Typescript | Firebase',
            descriptionKey: 'portfolio.dabubble',
            link: 'https://dabubble.rabia-uerkmez.de/',
            git: 'https://github.com/RabiaUerkmez/dabubble',
            img: 'dabubble.png',
        },
        {
            name: 'Join',
            tech: 'HTML | CSS | JavaScript',
            descriptionKey: 'portfolio.join',
            link: 'https://join.rabia-uerkmez.de/html/user-login/log-in.html',
            git: 'https://github.com/RabiaUerkmez/Join',
            img: 'join.png',
        },
        {
            name: 'El Pollo Loco',
            tech: 'HTML | CSS | JavaScript',
            descriptionKey: 'portfolio.loco',
            link: 'https://el-pollo-loco.rabia-uerkmez.de/',
            git: 'https://github.com/RabiaUerkmez/El-Pollo-Loco',
            img: 'loco.png',
        },
    ];

}
