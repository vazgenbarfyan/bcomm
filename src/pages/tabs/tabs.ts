import { Component } from '@angular/core';

import { PostsPage } from '../posts/posts';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import {AuthService} from "../../services/auth.service";
import {NavController} from "ionic-angular";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = PostsPage;
  tab2Root: any = AboutPage;
  tab3Root: any = ContactPage;

  constructor(private authService: AuthService, private navCtrl: NavController) {

  }

}
