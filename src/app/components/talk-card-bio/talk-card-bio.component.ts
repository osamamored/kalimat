import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-talk-card-bio',
  templateUrl: './talk-card-bio.component.html',
  styleUrls: ['./talk-card-bio.component.scss']
})
export class TalkCardBioComponent implements OnInit {

  @Input() talk: any
  constructor() { }

  ngOnInit(): void {
  }

}
