import {Component, ViewChild} from '@angular/core';
import {Platform, Nav} from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import  { Storage } from '@ionic/storage';

import { TabsPage } from '../pages/tabs/tabs';
import {PostsPage} from "../pages/posts/posts";
import {ProblemsPage} from "../pages/problems/problems";
import {UpcomingPage} from "../pages/upcoming/upcoming";
import {HistoryPage} from "../pages/history/history";


@Component({
  templateUrl: 'app.html',
  providers: [Storage]
})
export class MyApp {
  rootPage = TabsPage;
  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  goToPosts(){
    this.nav.push(PostsPage);
  }

  goToExistingProblems(){
    this.nav.push(ProblemsPage);
  }

  goToUpcomingProblems(){
    this.nav.push(UpcomingPage);
  }

  goToHistory(){
    this.nav.push(HistoryPage);
  }
}
