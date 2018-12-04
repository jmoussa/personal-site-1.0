import { Component, OnInit } from '@angular/core';
import {trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger
} from '@angular/animations';
import { BlockingProxy } from 'blocking-proxy';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('slideUp', [
      state('showDetails', style({
        paddingTop: '0',
      })),
      transition('* => showDetails', [
        animate('500ms ease')
      ])
    ]),
    trigger('slideIn', [
      state('in', style({
        transform: 'translateX(0)',
        opacity: '1',
      })),
      state('out', style({
        transform: 'translateX(200%)',
      })),
      transition('* => in', [
        style({transform: 'translateX(-200%)', opacity: '1'}),
        animate('750ms 50ms ease-out')
      ])
    ]),
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0}),
        animate('750ms 750ms ease-out', style({opacity: '1'})),
      ]),
      transition(':leave', [
        animate('750ms ease-out', style({opacity: '0'}))
      ])
    ])
  ],
})
export class ProjectsComponent implements OnInit {
  public val = '';

  openssl: boolean;
  expense: boolean;
  movie: boolean;
  selected: boolean;

  navigateToGithub(s: String) {
    console.log( s );
    window.open('https://github.com/jmoussa/' + s, '_blank');
  }

  constructor() { }

  ngOnInit() {
    this.openssl = false;
    this.expense = false;
    this.movie = false;
    this.selected = false;
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
