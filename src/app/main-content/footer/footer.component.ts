import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule, HttpClientModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(public translateService: TranslateService) { }

}
