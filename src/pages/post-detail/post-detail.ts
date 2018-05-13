import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the PostDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-post-detail',
  templateUrl: 'post-detail.html'
})
export class PostDetailPage {

  public post: IPost;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.post = navParams.get('post');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostDetailPage');
  }

}
