import { Component } from '@angular/core';
import { ContactInfoComponent } from "./contact-info/contact-info.component";

@Component({
    selector: 'app-contact',
    standalone: true,
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss',
    imports: [ContactInfoComponent]
})
export class ContactComponent {

}
