import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-customer-service-ticket',
  templateUrl: './customer-service-ticket.component.html',
  styleUrls: ['./customer-service-ticket.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerServiceTicketComponent implements OnInit {
  noteSectionFlag: (boolean) = false; 
  businessSectionFlag: (boolean) = false;
  productSectionFlag: (boolean) = false;
  initialSectionFlag: (boolean) = false;
  typeSectionFlag: (boolean) = false;
  locationSectionFlag: (boolean) = false;
  priceValue: (string) = ' ';
  disableButton: (boolean) = false;
  disableButtonClass: (string) = '';
  emergencyInitialSectionFlag: (boolean) = false;
  salesFlowFlag: (boolean) = false;
  emergencyFlowFlag: (boolean) = false;
  pendingCardFlag: boolean = false;
  isShowAppField = false;

  constructor(public dialogRef: MatDialogRef<CustomerServiceTicketComponent>,) { }

  ngOnInit(): void {
  }

  openNote() {
    this.noteSectionFlag =!this.noteSectionFlag;
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

  displayEmergencyInitateSection(){
    this.emergencyInitialSectionFlag = true;
  }

  RequestDraftPolicy() {
    if(this.priceValue == ' ') {
      this.disableButton = true;
      this.disableButtonClass = 'set-opacity'
    }
  }

}
