import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { PolicyCard } from '../policy-card/models/policy-card.model';


@Component({
  selector: 'app-policy-sort',
  templateUrl: './policy-sort.component.html',
  styleUrls: ['./policy-sort.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PolicySortComponent implements OnInit {
  
  @Input() sortingArray: PolicyCard[]; 
  @Output() sortingArrayChange = new EventEmitter<PolicyCard[]>();
  
  constructor() {}

  ngOnInit(): void {}

  ascending() {
    this.sortingArray.sort((a, b) => a.customer.name.toLowerCase() > b.customer.name.toLowerCase() ? 1 : -1);
    console.log('1', this.sortingArray);
    this.sortingArrayChange.emit(this.sortingArray);
  }

  descending() {
    this.sortingArray.sort((a, b) => a.customer.name.toLowerCase() > b.customer.name.toLowerCase() ? -1 : 1);
    console.log(this.sortingArray);
    this.sortingArrayChange.emit(this.sortingArray);
  }

}
