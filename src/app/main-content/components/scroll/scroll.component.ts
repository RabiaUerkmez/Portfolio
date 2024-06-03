import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageServiceService } from '../../../languageData.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scroll',
  standalone: true,
  imports: [TranslateModule, HttpClientModule, CommonModule],
  templateUrl: './scroll.component.html',
  styleUrl: './scroll.component.scss'
})
export class ScrollComponent {
  constructor(public translateService: TranslateService,  public languageService: LanguageServiceService) {}
}
