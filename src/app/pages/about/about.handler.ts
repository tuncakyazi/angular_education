import {Injectable} from '@angular/core';
import {CardModel} from '../../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class AboutHandler {

  public card: CardModel = null;

  public isCardOpen = false;

  constructor() {}

  public init(): void {
    this.card = new CardModel(
      'Shiba Inu',
      'Dog Breed',
      'https://material.angular.io/assets/img/examples/shiba2.jpg',
      'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n' +
      '      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n' +
      '      bred for hunting.'
    );
  }

  public toggleCard() {
    this.isCardOpen = !this.isCardOpen;
  }
}
