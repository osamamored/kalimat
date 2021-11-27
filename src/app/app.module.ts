import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {HttpClientModule} from "@angular/common/http";
import { KalimatHomeComponent } from './components/kalimat-home/kalimat-home.component';
import { TalkCardComponent } from './components/talk-card/talk-card.component';
import { TalkComponent } from './components/talk/talk.component';
import { TalkVideoPlayerComponent } from './components/talk-video-player/talk-video-player.component';
import { TalkCardBioComponent } from './components/talk-card-bio/talk-card-bio.component';
import {MatDividerModule} from "@angular/material/divider";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
  declarations: [
    AppComponent,
    KalimatHomeComponent,
    TalkCardComponent,
    TalkComponent,
    TalkVideoPlayerComponent,
    TalkCardBioComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatDividerModule,
        MatProgressSpinnerModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
