import { Component, AfterViewChecked, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sticky-navbar',
  templateUrl: './sticky-navbar.component.html',
  styleUrls: ['./sticky-navbar.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class StickyNavbarComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
  }

}
