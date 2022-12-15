import { ChangeDetectionStrategy, Component, OnInit, Input } from '@angular/core';
import { MotorCard } from './model/motor-card.model';

@Component({
  selector: 'app-motor-card',
  templateUrl: './motor-card.component.html',
  styleUrls: ['./motor-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MotorCardComponent implements OnInit {

  @Input() card?: MotorCard;

  constructor() { }

  ngOnInit(): void {
  }

}
