import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showNav: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showNav = event.url === '/' || event.urlAfterRedirects === '/';
      }
    });
  }

  navigate() {
    this.showNav = false;
  }

  portfolioContent: any[] = [];
  cardTwoActive: boolean = false;
  cardThreeActive: boolean = false;

  // If's
  portfolioMainIf: boolean = true;
  soleJourneyMainIf: boolean = false;

  cardTwo() {
    this.cardTwoActive = !this.cardTwoActive;
  }

  cardThree() {
    this.cardThreeActive = !this.cardThreeActive;
  }

  soleJourneyIf() {
    this.portfolioMainIf = false;
    this.soleJourneyMainIf = true;
  }
}
