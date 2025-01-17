import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  storeContent: string = 'about';
  content: string[] = ['about', 'skills', 'project', 'experience'];
  count: number = 0;

  constructor(private router: Router) {}

  ngOnInit() {}

  leftArrow() {
    this.count = (this.count - 1 + this.content.length) % this.content.length;
    this.storeContent = this.content[this.count];
  }

  rightArrow() {
    this.count = (this.count + 1) % this.content.length;
    this.storeContent = this.content[this.count];
  }

  routeTo(page: string) {
    this.router.navigate([`/${page}`]);
  }
}
