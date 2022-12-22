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
    console.log('dddddddddddddddddddd');
    const detail = {
      response: this.response,
      detailContent: this.detailContent,
      policyPrice: this.policyPrice,
      additionalDetailContent: this.additionalDetailContent,
      date: new Date(),
    };
    currentArray.push(detail);
    this.data.detailsJson = Object.assign({}, currentArray);
    console.log(this.data.detailsJson);
    this.policyCardService.updatePolicyRenewalTickets(this.data);
  }

  saveHistory() {
    let currentCommunications: {}[] = [];
    if (
      Object.keys(this.data.detailsJson).length === 0 &&
      this.data.detailsJson.constructor === Object
    ) {
      this.createNewCommunications(currentCommunications);
    } else {
      console.log(this.data.detailsJson);
      console.log(Object.values(this.data.detailsJson));
      this.createNewCommunications(Object.values(this.data.detailsJson));

      console.log(Object.values);
    }

    this.pageControlChange.emit('first');
  }
}
