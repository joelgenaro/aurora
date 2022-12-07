import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PolicyStatus } from '../policy-status/models/policy-status.model';
import { PolicyCardService } from '../../services/policy-card.service';
import { PolicyCard } from '../policy-card/models/policy-card.model';

@Component({
  selector: 'app-policy-renewals',
  templateUrl: './policy-renewals.component.html',
  styleUrls: ['./policy-renewals.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PolicyRenewalsComponent implements OnInit {
  steps: PolicyStatus[] = [
    { title: 'Policy Renewal Followup', color: 'bg-[#d8d8d8]' },
    { title: 'In Process', color: 'bg-[#3890cf]' },
    { title: 'Processed (Renewal Issued)', color: 'bg-[#939393]' },
    { title: 'Renewal Approved', color: 'bg-[#199e52]' },
    { title: 'Closed (No Renewal)', color: 'bg-[#e7e7e7]' },
  ];

  cards: PolicyCard[] = [];

  constructor(private policyCardService: PolicyCardService) {}

  ngOnInit(): void {
    this.getCards();
  }

  getCards(): void {
    this.policyCardService
      .getCards()
      .subscribe((cards) => (this.cards = cards));
  }
}
