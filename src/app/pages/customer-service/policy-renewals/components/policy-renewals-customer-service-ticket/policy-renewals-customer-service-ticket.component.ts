import { ChangeDetectionStrategy, Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-policy-renewals-customer-service-ticket',
  templateUrl: './policy-renewals-customer-service-ticket.component.html',
  styleUrls: ['./policy-renewals-customer-service-ticket.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PolicyRenewalsCustomerServiceTicketComponent implements OnInit {

  @Input() data: {};
  pageFlag: string = 'first';
  noteSectionFlag: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<PolicyRenewalsCustomerServiceTicketComponent>
  ) {}

  ngOnInit(): void {}

  nextPage() {
    this.pageFlag = 'next';
  }

  backToFirstPage() {
    this.pageFlag = 'first';
  }

  openNote() {
    this.noteSectionFlag = !this.noteSectionFlag;
  }
}
