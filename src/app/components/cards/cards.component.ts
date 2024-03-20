import { Component, Input } from '@angular/core';
import { animationCard } from 'src/app/animations';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  animations: [animationCard],
})
export class CardsComponent {
  @Input() digimonCard: any;
}
