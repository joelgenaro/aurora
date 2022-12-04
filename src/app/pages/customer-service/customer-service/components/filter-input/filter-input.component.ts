import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-filter-input',
  templateUrl: './filter-input.component.html',
  styleUrls: ['./filter-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterInputComponent implements OnInit {
  @Input() value: string;

  constructor() { }

  ngOnInit(): void {
  }

}
