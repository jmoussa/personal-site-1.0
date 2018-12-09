import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { trigger, state, style, animate, stagger, query, transition } from '@angular/animations';
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
    trigger('staggerGrow', [
      transition(':enter', [
        query('li', [
          style({opacity: '0', transform: 'scale(0)'}),
          stagger('250ms', [
            animate('300ms ease-out', style({opacity: '1', transform: 'scale(1)'})),
          ]),
        ])
      ])
    ]),
    trigger('staggerSlide', [
      transition(':enter', [
        query('.chart_percent', [
          style({opacity: '0', transform: 'translateX(-200%)'}),
          stagger('100ms', [
            animate('300ms ease-out', style({opacity: '1', transform: 'translateX(0)'})),
          ]),
        ])
      ])
    ]),
  ]
})

export class BioComponent implements OnInit {

  inView: boolean;
  iconView: boolean;
  graphView: boolean;

  constructor() { }
  isInViewport (el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
      rect.left >= 0 && rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
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
    this.iconView = false;
    this.graphView = false;

    const headerHandler = this.isInView(document.querySelector('.header'), () => {
      this.inView = true;
    });
    const iconHandler = this.isInView(document.querySelector('.container'), () => {
      this.iconView = true;
    });
    const graphHandler = this.isInView(document.querySelector('.chart'), () => {
      this.graphView = true;
    });
    $(window).on('DOMContentLoaded load resize scroll', headerHandler);
    $(window).on('DOMContentLoaded load resize scroll', iconHandler);
    $(window).on('DOMContentLoaded load resize scroll', graphHandler);
  }
}
