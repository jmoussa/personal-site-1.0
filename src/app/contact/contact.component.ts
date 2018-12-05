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
    const valid = this.validate(this.email.value, this.body.value, this.name.value);
    if (valid) {
      console.log('SEND EMAIL to BACKEND');
    }
  }
  constructor() { }

  validate(email: String, body: String, name: String) {
    console.log('CHECK EMAIL AND BODY FOR XSS');
    return true;
  }
  ngOnInit() {
  }

}
