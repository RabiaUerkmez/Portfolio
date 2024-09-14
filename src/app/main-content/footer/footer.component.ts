import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink, Router } from '@angular/router';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule, HttpClientModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor(public translateService: TranslateService, private router: Router) { }

  /**
   * Navigates to the '/imprint' route and scrolls the window to the top of the page.
   * 
   * This method uses the Angular Router to navigate to the '/imprint' route. Once the navigation
   * is complete, it scrolls the window to the top (coordinates 0, 0).
   * 
   * @returns A promise that resolves when the navigation is complete and the window has been scrolled.
   */
  scrollToImprintsTop() {
    this.router.navigateByUrl('/imprint').then(() => {
      window.scrollTo(0, 0);
    });
  }

}
