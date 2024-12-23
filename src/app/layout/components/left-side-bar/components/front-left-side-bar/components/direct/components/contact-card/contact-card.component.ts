import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ContactCard } from '../../models/contact-card.model';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactCardComponent implements OnInit {

  @Input() contact!: ContactCard;

  constructor() { }

  ngOnInit(): void {
  }

}
