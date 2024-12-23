import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { card } from '../../models/card/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit {

  @Input() card!: card;
  backgroundStyle: any;
  constructor() {
  }

  ngOnInit(): void {
    this.backgroundStyle = { ['background-color']: this.card.backgroundColor };
  }

}
