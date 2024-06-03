import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { LanguageServiceService } from '../../../languageData.service';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [TranslateModule, HttpClientModule, CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  

  constructor(public translateService: TranslateService, public languageService: LanguageServiceService) { }
  
}
