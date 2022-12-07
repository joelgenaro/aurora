import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-service-ticket-two',
  templateUrl: './customer-service-ticket-two.component.html',
  styleUrls: ['./customer-service-ticket-two.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerServiceTicketTwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
