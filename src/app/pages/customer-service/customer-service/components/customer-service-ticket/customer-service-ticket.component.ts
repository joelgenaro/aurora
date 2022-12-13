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


  constructor(public dialogRef: MatDialogRef<CustomerServiceTicketComponent>,) { }

  ngOnInit(): void {
  }

  openNote() {
    this.noteSectionFlag =!this.noteSectionFlag;
  }

  displayBusinessSection() {
    this.businessSectionFlag = true;
  }

  displayProductSection() {
    this.productSectionFlag = true;
  }

  diplayInitialSection() {
    this.initialSectionFlag = true;
  }


  displayTypeSection() {
    this.typeSectionFlag = true;
  }

  displayLocationSection() {
    this.locationSectionFlag = true;
  }

  displayEmergencyInitateSection(){
    console.log('');
    this.emergencyInitialSectionFlag = true;
  }

  RequestDraftPolicy() {
    if(this.priceValue == ' ') {
      this.disableButton = true;
      this.disableButtonClass = 'set-opacity'
    }
  }

}
