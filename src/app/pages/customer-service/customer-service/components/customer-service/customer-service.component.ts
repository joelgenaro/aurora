import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PolicyStatus } from '@root/pages/customer-service/policy-renewals/components/policy-status/models/policy-status.model';
import { PolicyCard } from '@root/pages/customer-service/policy-renewals/components/policy-card/models/policy-card.model';
import { PolicyCardService } from '@root/pages/customer-service/policy-renewals/services/policy-card.service';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { CustomerServiceTicketComponent } from '../customer-service-ticket/customer-service-ticket.component';

@Component({
  selector: 'app-customer-service',
  templateUrl: './customer-service.component.html',
  styleUrls: ['./customer-service.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerServiceComponent implements OnInit {
  steps: PolicyStatus[] = [
    { title: 'Created/Received Queue', color: 'bg-[#d8d8d8]' },
    { title: 'In Process', color: 'bg-[#3890cf]' },
    { title: 'Processed (Renewal Issued)', color: 'bg-[#939393]' },
    { title: 'Resolved', color: 'bg-[#199e52]' },
    { title: 'Closed', color: 'bg-[#e7e7e7]' },
  ];

  followUpCards: PolicyCard[] = [];
  inProcessCards: PolicyCard[] = [];
  processedCards: PolicyCard[] = [];
  approvedCards: PolicyCard[] = [];
  closedCards: PolicyCard[] = [];

  constructor(
    private policyCardService: PolicyCardService,
    public dialog: MatDialog
  ) {
    console.log('this is customer service component');
  }

  openDialog(): void {
    this.dialog.open(CustomerServiceTicketComponent, {
      height: '90%',
      width: '90%',
    });
  }

  ngOnInit(): void {
    this.getCards();
  }

  getCards(): void {
    this.policyCardService
      .getFolllowUpCards()
      .subscribe((cards) => (this.followUpCards = cards));
    this.policyCardService
      .getInProcessCards()
      .subscribe((cards) => (this.inProcessCards = cards));
    this.policyCardService
      .getProcessedCards()
      .subscribe((cards) => (this.processedCards = cards));
    this.policyCardService
      .getApprovedCards()
      .subscribe((cards) => (this.approvedCards = cards));
    this.policyCardService
      .getClosedCards()
      .subscribe((cards) => (this.closedCards = cards));
  }

  drop(event: CdkDragDrop<PolicyCard[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
