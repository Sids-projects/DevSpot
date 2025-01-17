import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  currecntComp: string = 'home';
  screenWidth: number = window.innerWidth;
  screenHeight: number = window.innerHeight;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const urlSegment = event.urlAfterRedirects.split('/').pop() || 'home';
        this.currecntComp = urlSegment;
      }
    });
  }

  // Listener for screen resize
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }
}
