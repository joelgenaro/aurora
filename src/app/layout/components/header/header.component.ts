import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  toggleRightSideBar() {
    throw new Error('Method not implemented.');
  }
  toggleLeftSideBar() {
    throw new Error('Method not implemented.');
  }
}
