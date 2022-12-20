import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PolicyStatus } from '@root/pages/customer-service/policy-renewals/components/policy-status/models/policy-status.model';
import { PolicyCard } from '@root/pages/customer-service/policy-renewals/components/policy-card/models/policy-card.model';
// import { PolicyCardService } from '@root/pages/customer-service/policy-renewals/services/policy-card.service';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { CustomerServiceTicketComponent } from '../customer-service-ticket/customer-service-ticket.component';
import { CustomerCardService } from '../../services/customer-card.service';

@Component({
  selector: 'app-customer-service',
  templateUrl: './customer-service.component.html',
  styleUrls: ['./customer-service.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerServiceComponent implements OnInit {
  steps: PolicyStatus[] = [
    { title: 'Policy Renewal Followup', color: 'bg-[#d8d8d8]' },
    { title: 'In Process', color: 'bg-[#3890cf]' },
    { title: 'Processed (Renewal Issued)', color: 'bg-[#939393]' },
    { title: 'Renewal Approved', color: 'bg-[#199e52]' },
    { title: 'Closed (No Renewal)', color: 'bg-[#e7e7e7]' },
  ];

  followUpCards: PolicyCard[] = [];
  inProcessCards: PolicyCard[] = [];
  processedCards: PolicyCard[] = [];
  approvedCards: PolicyCard[] = [];
  closedCards: PolicyCard[] = [];

  constructor(
    private CustomerCardService: CustomerCardService,
    public dialog: MatDialog
  ) {
    this.getCards();
  }

  openDialog(card: {}): void {
    this.dialog.open(CustomerServiceTicketComponent, {
      height: '90%',
      width: '90%',
      data: card,
    });
  }

  ngOnInit(): void {
    this.getCards();
  }

  getCards(): void {
    this.CustomerCardService.getCutomerServiceTickets().subscribe((data: any) => {
      const temp = data;

      this.followUpCards = temp.inQueueTickets;
      this.inProcessCards = temp.inProgressTickets;
      this.processedCards = temp.processedTickets;
      this.approvedCards = temp.resolvedTickets;
      this.closedCards = temp.closedTickets;

      console.log(this.followUpCards);
    });
  }

  drop(event: CdkDragDrop<PolicyCard[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      this.openDialog(event.container.data);

      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
