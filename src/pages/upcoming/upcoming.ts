import { Component } from '@angular/core';
import {NavController, NavParams, ModalController} from 'ionic-angular';
import {AuthService} from "../../services/auth.service";
import {PostService} from "../../services/post.service";
import {HomePage} from "../home/home";
import {PostDetailPage} from "../post-detail/post-detail";
import { Storage } from '@ionic/storage';

/*
  Generated class for the Upcoming page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-upcoming',
  templateUrl: 'upcoming.html'
})
export class UpcomingPage {

  posts: Array<IPost>;
  public isAdmin: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthService,
              private postService: PostService, private modalCtrl: ModalController, private storage: Storage) {

    storage.get('role').then((role: string) => this.isAdmin = role === "admin");
  }

  ionViewDidLoad() {
    this.postService.allPosts.then((res: {posts: Array<IPost>}) => {
      this.posts = res.posts.filter((item: IPost) => !!item.meeting);
      console.log(this.posts, 'psto')
    })
  }

  public goToPostDetail(post: IPost): void {
    let postModal = this.modalCtrl.create(PostDetailPage, {post: post});
    postModal.present();
  }

  ionViewCanEnter(){
    this.authService.isAuthenticated.then((isAuth: boolean) => {
      if(!isAuth) this.navCtrl.push(HomePage);
      return false;
    });
    return true;
  }

  accept(post: IPost): void {
    this.postService.accept(post._id);
  }

  decline(post: IPost): void {
    this.postService.decline(post._id);
  }

}
