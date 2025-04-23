import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  currecntComp: string = 'home';
  isDarkMode = false;
  screenWidth: number = window.innerWidth;
  screenHeight: number = window.innerHeight;

  constructor(private router: Router) {}

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme') || 'dark-mode';
    this.isDarkMode = savedTheme === 'dark-mode';
    document.body.classList.add(savedTheme);

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

  private theme = new BehaviorSubject<string>(
    localStorage.getItem('theme') || 'dark-mode'
  );
  currentTheme = this.theme.asObservable();

  setTheme(theme: string): void {
    const oldTheme = this.isDarkMode ? 'dark-mode' : 'light-mode';
    document.body.classList.remove(oldTheme);
    document.body.classList.add(theme);
    this.isDarkMode = theme === 'dark-mode';

    this.theme.next(theme);
    localStorage.setItem('theme', theme);
  }

  toggleTheme(): void {
    const newTheme = this.isDarkMode ? 'light-mode' : 'dark-mode';
    this.setTheme(newTheme);
  }
}
