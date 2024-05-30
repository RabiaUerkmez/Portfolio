import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainContentComponent } from "./main-content/main-content.component";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FooterComponent } from "./main-content/footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, MainContentComponent, FooterComponent]
})
export class AppComponent implements OnInit {
  title = 'Rabia Ürkmez';

  ngOnInit(): void {
    AOS.init();
  }
}
