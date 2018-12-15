import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  animations: [
    trigger('slideUp', [
      state('showDetails', style({
        paddingTop: '0',
      })),
      transition('* => showDetails', [
        animate('500ms ease')
      ])
    ]),
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
        query('.cards', [
          style({opacity: '0', transform: 'scale(0)'}),
          stagger('100ms', [
            animate('750ms ease-out', style({opacity: '1', transform: 'scale(1)'})),
          ]),
        ])
      ])
    ]),
  ],
})
export class ProjectsComponent implements OnInit {
  public val = '';

  openssl: boolean;
  expense: boolean;
  movie: boolean;
  selected: boolean;
  inView: boolean;
  projectView: boolean;

  navigateToGithub(s: String) {
    // console.log( s );
    window.open('https://github.com/jmoussa/' + s, '_blank');
  }

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
    this.openssl = false;
    this.expense = false;
    this.movie = false;
    this.selected = false;
    this.inView = false;
    this.projectView = false;

    const handler = this.isInView(document.querySelector('.project-header'), () => {
      this.inView = true;
    });
    const projectHandler = this.isInView(document.querySelector('.project-container'), () => {
      this.projectView = true;
    });

    $(window).on('DOMContentLoaded load resize scroll', projectHandler);
    $(window).on('DOMContentLoaded load resize scroll', handler);
  }

  showDetails(choice: String) {
    this.selected = true;
    switch (choice) {
      case 'openssl': {
        this.openssl = true;
        this.expense = false;
        this.movie = false;
        break;
      }
      case 'expense': {
        this.openssl = false;
        this.expense = true;
        this.movie = false;
        break;
      }
      case 'movie': {
        this.openssl = false;
        this.expense = false;
        this.movie = true;
        break;
      }
      default: {
        this.openssl = false;
        this.expense = false;
        this.movie = false;
        break;
      }
    }
  }
}
