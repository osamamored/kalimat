import {Component, HostListener, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";
import {filter, fromEvent, takeUntil, throttleTime} from "rxjs";

@Component({
  selector: 'app-kalimat-home',
  templateUrl: './kalimat-home.component.html',
  styleUrls: ['./kalimat-home.component.scss']
})

export class KalimatHomeComponent implements OnInit {
  talks: any[] = [];
  page = 0;
  isLoading: boolean = true;


  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loadTalks(this.page);
    fromEvent(document, 'scroll').subscribe((event: any) => {
      console.log(document.documentElement.clientHeight )
      console.log(document.documentElement.scrollHeight - document.documentElement.scrollTop)
      if ((document.documentElement.scrollHeight - document.documentElement.scrollTop) <= document.documentElement.clientHeight
        && !this.isLoading) {
        console.log(event)
        this.isLoading = true;
        this.loadTalks(this.page);
      }
    });
  }

  openTalk(talk: any) {
    this.router.navigate(['talk' , talk.id , talk.permanentLink], {
      state: {talk}
    });
  }

  loadTalks(page: number) {
    this.http.get(`${environment.API_URL}/talks/talksList?categoryId=0&page=${page}&size=10&sort=priority,asc`)
      .subscribe((res: any) => {
        this.isLoading = false;
        this.talks.push(...res.items);
      });
  }
}
