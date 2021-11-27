import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {KalimatHomeComponent} from "./components/kalimat-home/kalimat-home.component";
import {TalkComponent} from "./components/talk/talk.component";

const routes: Routes = [
  {path : '', component: KalimatHomeComponent, data: {main: true}},
  {path : 'talk/:id/:permLink', component: TalkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
