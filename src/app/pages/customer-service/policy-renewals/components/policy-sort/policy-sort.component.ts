import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { PolicyCard } from '../policy-card/models/policy-card.model';


@Component({
  selector: 'app-policy-sort',
  templateUrl: './policy-sort.component.html',
  styleUrls: ['./policy-sort.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PolicySortComponent implements OnInit {
  
  @Input() sortingArray!: PolicyCard[]; 
  arrow = false;
  @Output() sortingArrayChange = new EventEmitter<PolicyCard[]>();
  
  constructor() {}

  ngOnInit(): void {  }

  ascending():any {
    this.sortingArray.sort((a, b) => a.customer.name.toLowerCase() > b.customer.name.toLowerCase() ? 1 : -1);
    this.sortingArrayChange.emit(this.sortingArray);
    this.arrow = true;
  }

  descending():any {
    this.sortingArray.sort((a, b) => a.customer.name.toLowerCase() > b.customer.name.toLowerCase() ? -1 : 1);
    this.arrow = false;
    this.sortingArrayChange.emit(this.sortingArray);
  }

}
