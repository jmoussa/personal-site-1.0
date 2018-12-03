import { Component, HostListener, Inject, AfterContentInit} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterContentInit {

  originalPosition: number;
  hgt: String;

  constructor(@Inject(DOCUMENT) document) {
    this.originalPosition = 600;
  }

  ngAfterContentInit() {
    this.originalPosition = document.getElementById('navbar').offsetTop;
    this.hgt = document.getElementById('navbar').style.height;
  }

  @HostListener('window:scroll', ['$event'])

  onWindowScroll(e) {
    const sticky = this.originalPosition - +this.hgt;

    if (window.pageYOffset >= sticky) {
      const element = document.getElementById('navbar');
      element.classList.add('sticky');
    } else {
      const element = document.getElementById('navbar');
      element.classList.remove('sticky');
    }
  }
}
