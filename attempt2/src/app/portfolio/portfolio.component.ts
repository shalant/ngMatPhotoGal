import {Component} from '@angular/core';

const HEROES = [
  {id: 1, name:'Superman'},
  {id: 2, name:'Batman'},
  {id: 5, name:'BatGirl'},
  {id: 3, name:'Robin'},
  {id: 4, name:'Flash'}
];

@Component({
  selector: 'heroes',
  template: 'portfolio.component.html',
  styleUrls: ['portfolio.component.css'],
})
export class PortfolioComponent {
cards: any;
}

export class Heroes {
  heroes = HEROES;
}
