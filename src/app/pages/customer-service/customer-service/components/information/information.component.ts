import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InformationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
