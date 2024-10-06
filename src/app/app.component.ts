import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showNav: boolean = true;
  screenWidth: number = window.innerWidth;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showNav = event.url === '/' || event.urlAfterRedirects === '/';
      }
    });
  }

  ngOnInit() {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = event.target.innerWidth;
  }

  navigate() {
    this.showNav = false;
  }

  portfolioContent: any[] = [];
  cardOneActive: boolean = false;
  cardTwoActive: boolean = false;
  cardThreeActive: boolean = false;
  portfolioMainIf: boolean = true;
  soleJourneyMainIf: boolean = false;

  cardOne() {
    this.cardOneActive = !this.cardOneActive;
  }

  cardTwo() {
    this.cardTwoActive = !this.cardTwoActive;
  }

  cardThree() {
    this.cardThreeActive = !this.cardThreeActive;
  }
}
