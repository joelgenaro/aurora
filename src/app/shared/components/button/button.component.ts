import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnInit {
  @Output() trigger = new EventEmitter<void>();
  @Input() classes: string;
  @Input() text: string;
  @Input() icon: string;
  isBlue: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.isBlue = !this.isBlue;
    this.trigger.emit();
  }
}
