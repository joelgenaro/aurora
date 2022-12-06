import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProgressStep } from '../../../../shared/models/policy-renewals/progress-step.model';

@Component({
  selector: 'app-policy-renewals',
  templateUrl: './policy-renewals.component.html',
  styleUrls: ['./policy-renewals.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PolicyRenewalsComponent implements OnInit {
  steps: ProgressStep[] = [
    { title: 'Policy Renewal Followup', color: '#d8d8d8' },
    { title: 'In Process', color: '#3890cf' },
    { title: 'Processed (Renewal Issued)', color: '#939393' },
    { title: 'Renewal Approved', color: '#199e52' },
    { title: 'Closed (No Renewal)', color: '#e7e7e7' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
