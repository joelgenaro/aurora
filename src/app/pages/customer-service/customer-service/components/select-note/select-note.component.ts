import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-note',
  templateUrl: './select-note.component.html',
  styleUrls: ['./select-note.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectNoteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
