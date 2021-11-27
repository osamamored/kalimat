import {AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';

import * as videojs from 'videojs'

declare var bc: any;

@Component({
  selector: 'app-talk-video-player',
  templateUrl: './talk-video-player.component.html',
  styleUrls: ['./talk-video-player.component.scss']
})
export class TalkVideoPlayerComponent implements AfterViewInit , OnChanges {

  @ViewChild('playerContainer') playerContainer?: ElementRef<HTMLDivElement>;
  @Input() talk: any
  player: any
  loading: boolean = false;

  constructor() {
  }


  ngAfterViewInit(): void {
    this.player = bc('bc-video-' + this.talk.video);
    this.player.play();
    console.log(this.player);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(!changes['talk']?.previousValue) return;
    const playerHTML = `<video controls style="width: 100%;height: auto;aspect-ratio: 16/9;"
         id="bc-video-${this.talk.video}"
         data-player="'2U6G2rQil'"
         data-video-id="${this.talk.video}"
         data-account="5034103592001"
         data-embed="default"
         data-application-id
         class="video-js">
  </video>`
    // @ts-ignore
    this.playerContainer?.nativeElement.innerHTML = playerHTML;
    /*let s = document.createElement("script");
    s.src = `https://players.brightcove.net/${playerData.accountId}/${playerData.playerId}_default/index.min.js`;
    document.body.appendChild(s);
    s.onload = () => bc("VideoPlayer").play();*/
    this.player = bc('bc-video-' + this.talk.video);
    this.player.play();
    console.log(this.player);
  }

}
