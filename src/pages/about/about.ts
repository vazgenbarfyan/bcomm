import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {AuthService} from "../../services/auth.service";
import {HomePage} from "../home/home";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, private authService: AuthService) {

  }

  ionViewCanEnter(){
    this.authService.isAuthenticated.then((isAuth: boolean) => {
      if(!isAuth) this.navCtrl.push(HomePage);
      return false;
    });
    return true;
  }

}
