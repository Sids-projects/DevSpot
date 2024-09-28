import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cg-home',
  templateUrl: './cg-home.component.html',
  styleUrl: './cg-home.component.scss',
})
export class CgHomeComponent {
  showMenuName: string = 'text';
  sections = ['scroll-text', 'scroll-size', 'scroll-color', 'scroll-space'];
  toolBarMenu: string = 'scroll-text';

  constructor(private router: Router) {}

  ngOnInit() {}

  editorRoute() {
    this.router.navigate(['/CGEditor']);
  }

  scrollTo(elementId: string) {
    this.toolBarMenu = elementId;
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
