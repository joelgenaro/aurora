import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entity-information',
  templateUrl: './entity-information.component.html',
  styleUrls: ['./entity-information.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntityInformationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
