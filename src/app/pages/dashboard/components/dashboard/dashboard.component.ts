import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UiService } from '@root/shared/services/ui.service';
import { card } from '../../../../shared/models/card/card.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {

  cards: card[] = [
    {
      employees: [
        {
          photoURL: '../../../../../assets//images/profile.jpg',
        },
        {
          photoURL: '../../../../../assets//images/profile.jpg',
        },
        {
          photoURL: '../../../../../assets//images/profile.jpg',
        },
        {
          photoURL: '../../../../../assets//images/profile.jpg',
        },
      ],
      title: 'Customer Service',
      items: [
        {
          title: 'Insurance Renewals',
          number: 4
        },
        {
          title: 'Customer Service',
          number: 21
        }
      ],
      backgroundColor: '#186AA5'
    },
    {
      employees: [
        {
          photoURL: '../../../../../assets//images/profile.jpg',
        },
        {
          photoURL: '../../../../../assets//images/profile.jpg',
        },
        {
          photoURL: '../../../../../assets//images/profile.jpg',
        },
        {
          photoURL: '../../../../../assets//images/profile.jpg',
        },
      ],
      title: 'Insurance Underwriting',
      items: [
        {
          title: 'Insurance Renewals',
          number: 4
        },
        {
          title: 'Customer Service',
          number: 21
        }
      ],
      backgroundColor: '#469CD9'
    },
    {
      employees: [
        {
          photoURL: '../../../../../assets//images/profile.jpg',
        },
        {
          photoURL: '../../../../../assets//images/profile.jpg',
        },
        {
          photoURL: '../../../../../assets//images/profile.jpg',
        },
        {
          photoURL: '../../../../../assets//images/profile.jpg',
        },
      ],
      title: 'Accounting & Finance',
      items: [
        {
          title: 'Insurance Renewals',
          number: 4
        },
        {
          title: 'Customer Service',
          number: 21
        }
      ],
      backgroundColor: '#7BC8FF'
    }
  ]
  constructor(private uiService: UiService) { }

  ngOnInit(): void {
    this.uiService.toggleUpdateContentHeader({})
  }

}
