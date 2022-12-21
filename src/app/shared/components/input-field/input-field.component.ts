import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
// import { FormControl } from '@angular/forms';
import { BaseListItem } from '@root/shared/models/base-list-item.model';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputFieldComponent implements OnInit {
  @Input() label: string;
  @Input() value: string;
  @Input() inputValue: string;
  // @Input() formControl: FormControl;
  @Input() baseListItemsList: BaseListItem[];
  @Output() onTrigger = new EventEmitter<void>();
  @Output() inputValueChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.onTrigger.emit();
  }

  getValue(event: any) {
    this.inputValueChange.emit(event.target.value);
  }
}
