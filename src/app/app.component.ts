import { Component, HostListener, Inject, AfterContentInit} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterContentInit {

  originalPosition: number;
  hgt: number;

  constructor(@Inject(DOCUMENT) document) {
    this.originalPosition = 0;
  }

  ngAfterContentInit() {
    this.originalPosition = document.getElementById('navbar').offsetTop;
    this.hgt = $('#myNavbar').height();
    console.log('INITIAL HEIGHT: ' + this.hgt);
  }

  @HostListener('window:scroll', ['$event'])

  onWindowScroll(e) {
    const sticky = this.originalPosition - (+this.hgt);
    const element = document.getElementById('navbar');

    if (window.pageYOffset > sticky) {
      element.classList.add('sticky');
    } else {
      element.classList.remove('sticky');
    }
  }
}
