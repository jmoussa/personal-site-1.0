import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  research: boolean;
  structure: boolean;
  strategy: boolean;
  dev: boolean;
  constructor() { }

  ngOnInit() {
    this.research = false;
    this.structure = false;
    this.strategy = false;
    this.dev = false;
  }

  onClick(choice: String) {
    switch (choice) {
      case 'research': {
        this.research = true;
        this.structure = false;
        this.strategy = false;
        this.dev = false;
        break;
      }
      case 'structure': {
        this.research = false;
        this.structure = true;
        this.strategy = false;
        this.dev = false;
        break;
      }
      case 'strategy': {
        this.research = false;
        this.structure = false;
        this.strategy = true;
        this.dev = false;
        break;
      }
      case 'dev': {
        this.research = false;
        this.structure = false;
        this.strategy = false;
        this.dev = true;
        break;
      }
      default: {
        this.research = true;
        this.structure = false;
        this.strategy = false;
        this.dev = false;
      }
    }
  }

}
