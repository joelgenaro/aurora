import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PolicyStatus } from '../components/policy-status/models/policy-status.model';
import { PolicyCardService } from '../services/policy-card.service';
import { PolicyCard } from '../components/policy-card/models/policy-card.model';

@Component({
  selector: 'app-policy-renewals-two',
  templateUrl: './policy-renewals-two.component.html',
  styleUrls: ['./policy-renewals-two.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PolicyRenewalsTwoComponent implements OnInit {
  steps: PolicyStatus[] = [
    { title: 'Policy Renewal Followup', color: '#d8d8d8' },
    { title: 'In Process', color: '#3890cf' },
    { title: 'Processed (Renewal Issued)', color: '#939393' },
    { title: 'Renewal Approved', color: '#199e52' },
    { title: 'Closed (No Renewal)', color: '#e7e7e7' },
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
