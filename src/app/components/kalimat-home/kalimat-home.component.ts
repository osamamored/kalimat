import {Component, HostListener, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {ActivatedRoute, NavigationEnd, NavigationStart, Router} from "@angular/router";
import {filter, fromEvent, Subject, takeUntil, throttleTime} from "rxjs";

@Component({
  selector: 'app-kalimat-home',
  templateUrl: './kalimat-home.component.html',
  styleUrls: ['./kalimat-home.component.scss']
})

export class KalimatHomeComponent implements OnInit {
  talks: any[] = [];
  page = 0;
  isLoading: boolean = true;
  lastPosition: number = 0;
  lastRoute: string = '';
  private unsubscribe: Subject<void> = new Subject();

  constructor(private http: HttpClient,
              private router: Router,
  ) { }

  ngOnInit(): void {
    this.loadTalks(this.page);
    fromEvent(document, 'scroll').pipe(takeUntil(this.unsubscribe)).subscribe((event: any) => {
      if ((document.documentElement.scrollHeight - document.documentElement.scrollTop) <= document.documentElement.clientHeight + 100
        && !this.isLoading && this.router.url === '/') {
        this.isLoading = true;
        this.loadTalks(this.page);
      }
    });
    this.router.events.pipe(
      filter((events) => events instanceof NavigationStart || events instanceof NavigationEnd)
    ).pipe(takeUntil(this.unsubscribe)).subscribe(event => {
      if (event instanceof NavigationStart && event.url !== this.lastRoute) {
        this.lastRoute = this.router.url
        this.lastPosition = document.documentElement.scrollTop;
      }
      else if (event instanceof NavigationEnd && event.url === this.lastRoute) {
        setTimeout(() => window.scroll(0, this.lastPosition))
      }
    });
  }

  openTalk(talk: any) {
    this.router.navigate(['talk' , talk.id , talk.permanentLink], {
      state: {talk}
    });
  }

  loadTalks(page: number) {
    this.page++;
    this.http.get(`${environment.API_URL}/talks/talksList?categoryId=0&page=${page}&size=10&sort=priority,asc`)
      .subscribe((res: any) => {
        this.isLoading = false;
        this.talks.push(...res.items);
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
