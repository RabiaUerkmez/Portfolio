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
            tech: 'HTML | CSS | Javascript',
            description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
            link: ' ',
            github: ' ',
            img: 'join.png',
        },
        {
            name: 'El Pollo Loco',
            tech: 'HTML | CSS | Javascript',
            description: 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and poison bottles to fight against the killer chicken.',
            link: 'https://el-pollo-loco.rabia-uerkmez.de/',
            git: 'https://github.com/RabiaUerkmez/El-Pollo-Loco',
            img: 'loco.png',
        },
    ];

}
