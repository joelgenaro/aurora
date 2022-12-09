import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-customer-service-ticket-one',
  templateUrl: './customer-service-ticket-one.component.html',
  styleUrls: ['./customer-service-ticket-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerServiceTicketOneComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CustomerServiceTicketOneComponent>,) { }

  ngOnInit(): void {
  }

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }

}
