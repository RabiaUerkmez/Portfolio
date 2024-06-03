import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslateModule, HttpClientModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  constructor(public translateService: TranslateService) {}
}
