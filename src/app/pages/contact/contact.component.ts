import {Component, OnInit} from '@angular/core';
import {ContactHandler} from './contact.handler';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(public handler: ContactHandler) {}

  public ngOnInit(): void {
    this.handler.init();
  }
}
