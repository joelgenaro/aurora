import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Inject,
  ChangeDetectorRef,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { CustomerCardService } from '../../services/customer-card.service';

@Component({
  selector: 'app-customer-service-ticket',
  templateUrl: './customer-service-ticket.component.html',
  styleUrls: ['./customer-service-ticket.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerServiceTicketComponent implements OnInit {
  subscription: Subscription;
  // state variable
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
  categories: { id: number; name: string }[] = [];
  businesses: { id: number; name: string }[] = [];
  products: { id: number; productCode: string; productDescription: string }[] =
    [];
  requiredData: any;
  emergencyTypes: { id: number; name: string }[] = [];
  emergencyInitiateItems: {
    id: number;
    name: string;
    emergencyTypeId: number;
  }[] = [];

  constructor(
    public dialogRef: MatDialogRef<CustomerServiceTicketComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public customerCardService: CustomerCardService,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.subscription = this.customerCardService
      .getCategory()
      .subscribe((data: any) => {
        this.categories = data;
        console.log(this.categories[0].name);
        this.ref.detectChanges();
      });
  }

  openNote() {
    this.noteSectionFlag = !this.noteSectionFlag;
  }

  displaySection(sectionFlag: string) {
    switch (sectionFlag) {
      case 'business': {
        this.businessSectionFlag = true;
        this.salesFlowFlag = true;
        this.emergencyFlowFlag = false;
        this.subscription = this.customerCardService
          .getBusiness()
          .subscribe((data: any) => {
            this.businesses = data;
            console.log(this.businesses[0].name);
            this.ref.detectChanges();
          });
        break;
      }
      case 'type': {
        this.typeSectionFlag = true;
        this.salesFlowFlag = false;
        this.emergencyFlowFlag = true;
        this.subscription = this.customerCardService
          .getEmerencyTypeData()
          .subscribe((data: any) => {
            this.emergencyTypes = data;
            this.ref.detectChanges();
          });
        break;
      }
      default:
        break;
    }
  }

  displayBusinessSection() {
    this.businessSectionFlag = true;
    this.salesFlowFlag = true;
    this.emergencyFlowFlag = false;
  }

  displayProductSection(businessId: number) {
    this.subscription = this.customerCardService
      .getProduct(businessId)
      .subscribe((data: any) => {
        this.products = data;

        this.ref.detectChanges();
      });
    this.productSectionFlag = true;
  }

  displayInitialSection() {
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

  displayLocationSection(emergencyTypeId: number) {
    this.subscription = this.customerCardService
      .getEmergencyInitiateItems(emergencyTypeId)
      .subscribe((data: any) => {
        this.emergencyInitiateItems = data;
        console.log(this.emergencyInitiateItems);
        this.ref.detectChanges();
      });
    this.locationSectionFlag = true;
  }

  displayEmergencyInitateSection() {
    this.emergencyInitialSectionFlag = true;
  }

  RequestDraftPolicy() {
    if (this.priceValue == ' ') {
      this.disableButton = true;
      this.disableButtonClass = 'set-opacity';
      this.subscription = this.customerCardService
        .getRequiredData()
        .subscribe((data: any) => {
          this.requiredData = JSON.parse(data.jsonData);
          console.log(this.requiredData);
          this.ref.detectChanges();
        });
    }
  }
}
