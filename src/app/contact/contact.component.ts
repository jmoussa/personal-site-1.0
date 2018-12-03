import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  email = new FormControl('');
  name = new FormControl('');
  body = new FormControl('');

  resume() {
    window.open('../../assets/JosephMoussa3.0.pdf' , '_blank');
  }

  sendEmail() {
    console.log('EMAIL ' + this.email.value + '\nBODY ' + this.body.value);
  }
  constructor() { }

  ngOnInit() {
  }

}
