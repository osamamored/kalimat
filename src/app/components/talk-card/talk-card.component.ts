import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-talk-card',
  templateUrl: './talk-card.component.html',
  styleUrls: ['./talk-card.component.scss']
})
export class TalkCardComponent implements OnInit {

  @Input() talk: any;
  constructor() { }

  ngOnInit(): void {
  }

}
