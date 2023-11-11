import { Component } from '@angular/core';
import {Contact,contacts} from './contact-data';

@Component({
  selector: 'wcg-contacts',
  templateUrl: './contacts.component.html'
})
export class ContactsComponent {
  contactsData:Contact[];

  constructor() { 
    this.contactsData=contacts;
  }
}