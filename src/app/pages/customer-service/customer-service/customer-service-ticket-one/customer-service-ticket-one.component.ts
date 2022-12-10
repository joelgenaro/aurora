import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HistoryOneComponent } from '../components/history-one/history-one.component';

@Component({
  selector: 'app-customer-service-ticket-one',
  templateUrl: './customer-service-ticket-one.component.html',
  styleUrls: ['./customer-service-ticket-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerServiceTicketOneComponent implements OnInit {
  @ViewChild(HistoryOneComponent)
  page_event: string = 'first';

  constructor(public dialogRef: MatDialogRef<CustomerServiceTicketOneComponent>,) { }

  ngOnInit(): void {
  }

  pageEvent(event: string) {
    console.log(event);
    this.page_event = event;
    console.log(this.page_event );
  }

}
