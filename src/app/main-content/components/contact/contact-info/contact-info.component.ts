import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { LanguageServiceService } from '../../../../languageData.service';

@Component({
  selector: 'app-contact-info',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule, HttpClientModule],
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss', './contact-info-pyro.component.scss']
})
export class ContactInfoComponent {
  constructor(public translateService: TranslateService, public languageService: LanguageServiceService) { }

  http = inject(HttpClient)

  contactData = {
    name: "",
    email: "",
    message: "",
    checkbox: false,
  }

  mailTest = true;
  messageSent = false;


  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      console.log(this.contactData);
      ngForm.resetForm();
      this.messageSent = true;
    }

    setTimeout(() => {
      this.messageSent = false;
    }, 10000);
  }
}
