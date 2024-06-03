import { Component } from '@angular/core';
import { ComponentsComponent } from "./components/components.component";
import { CommonModule } from '@angular/common';
import { PrivacyComponent } from "./privacy/privacy.component";

@Component({
    selector: 'app-main-content',
    standalone: true,
    templateUrl: './main-content.component.html',
    styleUrl: './main-content.component.scss',
    imports: [CommonModule, ComponentsComponent,  PrivacyComponent]
})
export class MainContentComponent {

}
