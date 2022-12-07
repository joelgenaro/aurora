import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-policy-filter',
  templateUrl: './policy-filter.component.html',
  styleUrls: ['./policy-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PolicyFilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
