import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-talk',
  templateUrl: './talk.component.html',
  styleUrls: ['./talk.component.scss']
})
export class TalkComponent implements OnInit {
  talk: any;
  relatedTalks: any;
  talkStats: any;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      window.scroll(0,0);
      if (window.history.state.talk) {
        this.talkStats = window.history.state.talk;
      }
      this.http.get(`${environment.API_URL}/talks/${this.route.snapshot.params['id']}/talkDetails`)
        .subscribe((talk: any) => {
          this.talk = talk;
          this.http.get(`${environment.API_URL}/talks/${this.route.snapshot.params['id']}/relatedTalks`)
            .subscribe((relatedTalks: any) => {
              this.relatedTalks = relatedTalks.items;
            });
        });
    });

  }

  openTalk(talk: any) {
    this.router.navigate(['talk' , talk.id , talk.permanentLink], {
      state: {talk},
      replaceUrl: true,
    });
  }
}
