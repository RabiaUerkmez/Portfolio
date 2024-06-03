import { Component } from '@angular/core';
import { ContactInfoComponent } from "./contact-info/contact-info.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-contact',
    standalone: true,
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss',
    imports: [ContactInfoComponent, TranslateModule, HttpClientModule]
})
export class ContactComponent {
    constructor(public translateService: TranslateService) { }
}
