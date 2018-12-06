import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import * as $ from 'jquery';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss'],
  animations: [
    trigger('slide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-200%)'}),
        animate('500ms ease-out', style({opacity: '1', transform: 'translateX(0)'})),
      ]),
      transition(':leave', [
        animate('500ms ease-out', style({opacity: '0',  transform: 'translateX(200%)'}))
      ])
    ]),
    trigger('slideOpposite', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(200%)'}),
        animate('500ms ease-out', style({opacity: '1', transform: 'translateX(0)'})),
      ]),
      transition(':leave', [
        animate('500ms ease-out', style({opacity: '0',  transform: 'translateX(-200%)'}))
      ])
    ]),
  ]
})

export class BioComponent implements OnInit {

  inView: boolean;

  constructor() { }
  isInViewport (el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
  }
  isInView(el, callback) {
    let old_visible = false;
    return ( () => {
      const visible: boolean = this.isInViewport(el);
      if (visible !== old_visible) {
        old_visible = visible;
        if (typeof callback === 'function') {
          callback();
        }
      }
    });
  }
  ngOnInit() {
    this.inView = false;
    const handler = this.isInView(document.querySelector('.header'), () => {
      this.inView = true;
    });
    $(window).on('DOMContentLoaded load resize scroll', handler);
  }
}
