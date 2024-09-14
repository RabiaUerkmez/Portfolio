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
    projects = [
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
