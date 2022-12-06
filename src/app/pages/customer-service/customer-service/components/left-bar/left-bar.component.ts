import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeftBarComponent implements OnInit {
  
  items: any[] = [
    'Motor Underwriting Department', 
    'Medical Underwriting Department', 
    'Life Underwriting Department', 
    'General Underwriting Department',
    'Sales Department',
    'Customer Service',
    'Accounting Department',
    'Payables Department',
    'Receivables Department',
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
