import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AuthService} from "../../services/auth.service";
import {HomePage} from "../home/home";

/*
  Generated class for the Posts page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html'
})
export class PostsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostsPage');
  }

  ionViewCanEnter(){
    this.authService.isAuthenticated.then((isAuth: boolean) => {
      if(!isAuth) this.navCtrl.push(HomePage);
      return false;
    });
    return true;
  }

}
