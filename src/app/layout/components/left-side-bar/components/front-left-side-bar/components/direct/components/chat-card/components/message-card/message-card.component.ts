import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Message } from '../../../../models/message.model';

@Component({
  selector: 'app-message-card',
  templateUrl: './message-card.component.html',
  styleUrls: ['./message-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageCardComponent implements OnInit {

  @Input() message!: Message;

  constructor() { }

  ngOnInit(): void {
  }

}
