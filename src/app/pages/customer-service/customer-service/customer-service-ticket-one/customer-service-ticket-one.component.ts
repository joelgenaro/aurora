import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-service-ticket-one',
  templateUrl: './customer-service-ticket-one.component.html',
  styleUrls: ['./customer-service-ticket-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerServiceTicketOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
