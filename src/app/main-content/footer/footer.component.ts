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

  scrollToImprintsTop() {
    this.router.navigateByUrl('/imprint').then(() => {
      window.scrollTo(0, 0); 
    });
  }
  
}
