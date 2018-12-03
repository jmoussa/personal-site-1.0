import { Component, OnInit } from '@angular/core';
import {trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

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
        animate('500ms ease-out')
      ])
    ]),
    trigger('slideIn', [
      state('in', style({
        transform: 'translateX(0)',
      })),
      state('out', style({
        transform: 'translateX(200%)',
      })),
      transition('* => in', [
        style({transform: 'translateX(-200%)'}),
        animate('750ms 50ms ease-out')
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
