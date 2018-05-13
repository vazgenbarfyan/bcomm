import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';


import { PostsPage } from '../pages/posts/posts';
import { HistoryPage } from '../pages/history/history';
import { ProblemsPage } from '../pages/problems/problems';
import { UpcomingPage } from '../pages/upcoming/upcoming';

import {AuthService, PostService} from '../services';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Sidebar} from "../pages/sidebar/sidebar";
import {PostDetailPage} from "../pages/post-detail/post-detail";
import {PostToCurentPage} from "../pages/post-to-curent/post-to-curent";


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PostsPage,
    HistoryPage,
    ProblemsPage,
    UpcomingPage,
    Sidebar,
    PostDetailPage,
    PostToCurentPage
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PostsPage,
    HistoryPage,
    ProblemsPage,
    UpcomingPage,
    PostDetailPage,
    PostToCurentPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, AuthService, PostService]
})
export class AppModule {}
