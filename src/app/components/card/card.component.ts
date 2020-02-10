import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CardModel} from '../../models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() data: CardModel;

  @Output() callback: EventEmitter<any> = new EventEmitter();

  constructor() { }

  public ngOnInit() {
  }

  public closeCard() {
    this.callback.emit();
  }
}
