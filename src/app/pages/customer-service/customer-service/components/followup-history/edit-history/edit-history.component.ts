import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { PolicyCard } from '@root/pages/customer-service/policy-renewals/components/policy-card/models/policy-card.model';
import { PolicyCardService } from '@root/pages/customer-service/policy-renewals/services/policy-card.service';

@Component({
  selector: 'app-edit-history',
  templateUrl: './edit-history.component.html',
  styleUrls: ['./edit-history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditHistoryComponent implements OnInit {
  constructor(public policyCardService: PolicyCardService) {}

  @Input() pageControl = '';
  @Input() data = <PolicyCard>{};
  @Output() pageControlChange = new EventEmitter<any>();

  bgColorRequest: string = 'bg-main-gray';
  bgColorSend: string = 'bg-main-gray';
  colorRequest: string = '';
  colorSend: string = '';
  pageFlag: string = 'main';
  response: number;
  detailContent: string = '';
  policyPrice: string = '';
  additionalDetailContent: string = '';

  ngOnInit(): void {}

  pageEvent(flag: string) {
    if (flag == 'request') {
      this.pageFlag = flag;
      this.bgColorRequest = 'bg-primary';
      this.colorRequest = 'color-white';
    }
    if (flag == 'send') {
      this.pageFlag = flag;
      this.bgColorSend = 'bg-primary';
      this.colorSend = 'color-white';
    }
  }

  getResponse(res: number) {
    this.response = res;
  }

  createNewCommunications(currentArray: {}[]) {
    const detail = {
      response: this.response,
      detailContent: this.detailContent,
      policyPrice: this.policyPrice,
      additionalDetailContent: this.additionalDetailContent,
      date: new Date(),
    };
    currentArray.push(detail);
    this.data.detailsJson = JSON.stringify(currentArray);
  }

  saveHistory() {
    let currentCommunications: {}[] = [];
    if (this.data.detailsJson === null) {
      this.createNewCommunications(currentCommunications);
    } else {
      // this.createNewCommunications(Array.from(this.data.detailsJson));
    }
    this.policyCardService.updatePolicyRenewalTickets(this.data);

    this.pageControlChange.emit('first');
  }
}
