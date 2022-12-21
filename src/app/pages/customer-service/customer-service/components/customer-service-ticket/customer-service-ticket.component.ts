import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Inject,
} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseListItem } from '@root/shared/models/base-list-item.model';

@Component({
  selector: 'app-customer-service-ticket',
  templateUrl: './customer-service-ticket.component.html',
  styleUrls: ['./customer-service-ticket.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerServiceTicketComponent implements OnInit {
  status: BaseListItem[];
  noteSectionFlag: boolean = false;
  businessSectionFlag: boolean = false;
  productSectionFlag: boolean = false;
  initialSectionFlag: boolean = false;
  typeSectionFlag: boolean = false;
  locationSectionFlag: boolean = false;
  priceValue: string = ' ';
  disableButton: boolean = false;
  disableButtonClass: string = '';
  emergencyInitialSectionFlag: boolean = false;
  salesFlowFlag: boolean = false;
  emergencyFlowFlag: boolean = false;
  pendingCardFlag: boolean = false;
  isShowAppField = false;

  constructor(
    public dialogRef: MatDialogRef<CustomerServiceTicketComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    let statusValue: string;
    switch (this.data.dataKey.status) {
      case 0:
        statusValue = 'Follow up';
        break;
      case 1:
        statusValue = 'In Process';
        break;
      case 2:
        statusValue = 'Processed';
        break;
      case 3:
        statusValue = 'Approved';
        break;
      case 4:
        statusValue = 'Closed';
        break;
      default:
        break;
    }

    this.status = [{ id: '0', name: statusValue }];
  }

  openNote() {
    this.noteSectionFlag = !this.noteSectionFlag;
  }

  displayBusinessSection() {
    this.businessSectionFlag = true;
    this.salesFlowFlag = true;
    this.emergencyFlowFlag = false;
  }

  displayProductSection() {
    this.productSectionFlag = true;
  }

  diplayInitialSection() {
    this.initialSectionFlag = true;
  }

  displayTypeSection() {
    this.typeSectionFlag = true;
    this.salesFlowFlag = false;
    this.emergencyFlowFlag = true;
  }

  diplayPendingCard() {
    this.pendingCardFlag = true;
  }

  displayLocationSection() {
    this.locationSectionFlag = true;
  }

  displayEmergencyInitateSection() {
    this.emergencyInitialSectionFlag = true;
  }

  RequestDraftPolicy() {
    if (this.priceValue == ' ') {
      this.disableButton = true;
      this.disableButtonClass = 'set-opacity';
    }
  }
}
