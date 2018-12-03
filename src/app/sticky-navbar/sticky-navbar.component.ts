import { Component, AfterViewChecked, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sticky-navbar',
  templateUrl: './sticky-navbar.component.html',
  styleUrls: ['./sticky-navbar.component.scss']
})
export class StickyNavbarComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
  }

}
