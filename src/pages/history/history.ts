import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AuthService} from "../../services/auth.service";
import {HomePage} from "../home/home";
import {PostService} from "../../services/post.service";

/*
  Generated class for the History page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-history',
  templateUrl: 'history.html'
})
export class HistoryPage {

  posts: Array<IPost>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthService,
              private postService: PostService) {}

  ionViewDidLoad() {
    this.postService.allPosts.then(
      (res: {posts: Array<IPost>}) => this.posts = res.posts.filter((post: IPost) => post.accepted === false || post.accepted === true),
    )
  }

  ionViewCanEnter(){
    this.authService.isAuthenticated.then((isAuth: boolean) => {
      if(!isAuth) this.navCtrl.push(HomePage);
    });
    return true;
  }

}
