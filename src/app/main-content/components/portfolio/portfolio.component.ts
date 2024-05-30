import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-portfolio',
    standalone: true,
    templateUrl: './portfolio.component.html',
    styleUrl: './portfolio.component.scss',
    imports: [CommonModule]
})
export class PortfolioComponent {

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
            link: '',
            git: 'https://github.com/RabiaUerkmez/El-Pollo-Loco',
            img: 'loco.png',
        },
    ];

}
