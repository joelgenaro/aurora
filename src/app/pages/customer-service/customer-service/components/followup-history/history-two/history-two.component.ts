import { ChangeDetectionStrategy, Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-history-two',
  templateUrl: './history-two.component.html',
  styleUrls: ['./history-two.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HistoryTwoComponent implements OnInit {
  @Input() pageFlage = '';
  bgColorRequest: string = 'bg-main-gray';
  bgColorSend: string = 'bg-main-gray';
  colorRequest: string = '';
  colorSend: string = '';
  pageFlag: string = 'main';
  constructor() { }

  ngOnInit(): void {
  }

  pageEvent(flag: string) {
    if(flag =='request') {
      this.pageFlag = flag;
      this.bgColorRequest = 'bg-primary';
      this.colorRequest = 'color-white'
    }
    if(flag =='send') {
      this.pageFlag = flag;
      this.bgColorSend = 'bg-primary';
      this.colorSend = 'color-white'
    }
  }

}
