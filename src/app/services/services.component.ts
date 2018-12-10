import { Component, OnInit } from '@angular/core';
import {trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger
} from '@angular/animations';
import * as $ from 'jquery';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
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
    trigger('staggerSlide', [
      transition(':enter', [
        query('.service .image-container', [
          style({opacity: '0', transform: 'translateX(-200%)'}),
          stagger('100ms', [
            animate('750ms ease-out', style({opacity: '1', transform: 'translateX(0)'})),
          ]),
        ])
      ])
    ]),
    trigger('staggerSlide2', [
      transition(':enter', [
        query('.service .content-container', [
          style({opacity: '0', transform: 'translateX(200%)'}),
          stagger('100ms', [
            animate('750ms ease-out', style({opacity: '1', transform: 'translateX(0)'})),
          ]),
        ])
      ])
    ]),
  ]
})
export class ServicesComponent implements OnInit {
  inView: boolean;
  serviceView: boolean;

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
    this.serviceView = false;
    this.inView = false;
    const handler = this.isInView(document.querySelector('.services-header'), () => {
      this.inView = true;
    });
    const serviceHandler = this.isInView(document.querySelector('.service-list'), () => {
      this.serviceView = true;
    });
    $(window).on('DOMContentLoaded load resize scroll', serviceHandler);
    $(window).on('DOMContentLoaded load resize scroll', handler);
  }
}
