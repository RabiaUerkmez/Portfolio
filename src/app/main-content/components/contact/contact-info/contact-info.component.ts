import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { LanguageServiceService } from '../../../../languageData.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-info',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule, HttpClientModule, RouterLink],
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss', './contact-info-pyro.component.scss']
})
export class ContactInfoComponent {
  constructor(public translateService: TranslateService, public languageService: LanguageServiceService, private router: Router) { }

  http = inject(HttpClient)

  contactData = {
    name: "",
    email: "",
    message: "",
    checkbox: false,
  }

  messageSent = false;


  /**
   * Configuration object for making a POST request.
   * 
   * @property {string} endPoint - The URL endpoint to which the POST request is sent.
   * @property {(payload: any) => string} body - A function that takes a payload and returns it as a JSON string.
   * @property {object} options - Additional options for the POST request.
   * @property {object} options.headers - Headers to be included in the POST request.
   * @property {string} options.headers ['Content-Type'] - The content type of the request.
   * @property {string} options.headers.responseType - The expected response type.
   */
  post = {
    endPoint: 'https://rabia-uerkmez.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  /**
   * Handles the form submission event.
   * 
   * @param ngForm - The form to be submitted.
   * 
   * This method checks if the form has been submitted and is valid. If so, it sends a POST request
   * to the specified endpoint with the contact data. Upon successful submission, it resets the form
   * and displays a success message for 5 seconds. If an error occurs during the request, it logs the error
   * to the console. 
  **/
  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.messageSent = true;

            setTimeout(() => {
              this.messageSent = false;
            }, 5000);
          },
          error: (error) => {
            console.error('Error submitting request: ', error);
          },
          complete: () => console.info('Request sent successfully'),
        });
    }
  }

  /**
   * Navigates to the '/privacy' route and scrolls the window to the top of the page.
   * 
   * @returns A promise that resolves when the navigation is complete.
   */
  scrollToPrivacysTop() {
    this.router.navigateByUrl('/privacy').then(() => {
      window.scrollTo(0, 0);
    });
  }
}
