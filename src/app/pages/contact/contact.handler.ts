import {Injectable} from '@angular/core';
import { ContactFormModel } from 'src/app/models/contact-form.model';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ContactHandler {

  constructor() {}

  public formSendMessage = 'Successfully!';

  public welcome: string = null;

  public submitted = false;

  public init() {
    this.welcome = 'Welcome to adesso Turkey';
  }

  public send(form: NgForm) {
    // this.submitted = form.valid;
    console.log(form);
    if (form.valid) {
      const formData: ContactFormModel = new ContactFormModel({
        ...form.value,
      });
      console.log(formData);
    } else {
      console.log('form is not valid!');
    }
  }
}
