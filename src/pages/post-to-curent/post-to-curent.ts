import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {PostService} from "../../services/post.service";

/*
  Generated class for the PostToCurent page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-post-to-curent',
  templateUrl: 'post-to-curent.html'
})
export class PostToCurentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private postService: PostService) {}
  private postId: number;

  ionViewDidLoad() {
    this.postId = this.navParams.get('postId');
  }

  public onSubmit(data: {date: Date, info: string, meeting: boolean}): void {
    data.meeting = true;
    this.postService.postToCurrent(this.postId.toString(), data)
      .then((res) => console.log(res, 'success'));
  }

}
