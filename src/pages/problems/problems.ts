import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import {PostService} from "../../services/post.service";
import {AuthService} from "../../services/auth.service";
import {HomePage} from "../home/home";
import {PostDetailPage} from "../post-detail/post-detail";
import { Storage } from '@ionic/storage';
import {PostToCurentPage} from "../post-to-curent/post-to-curent";


@Component({
  selector: 'page-problems',
  templateUrl: 'problems.html'
})
export class ProblemsPage {
  public posts: Array<IPost> = [];
  public isAdmin: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private postService: PostService, private authService: AuthService,
              private modalCtrl: ModalController, private storage: Storage) {

    storage.get('role').then((role: string) => this.isAdmin = role === "admin");
  }

  ionViewDidLoad() {
    this.postService.allPosts.then(
      (res: {posts: Array<IPost>}) => this.posts = res.posts,
    )
  }

  public vote(post: IPost): void {
    this.postService.voteForPost(post._id).then(
      (res) => {
        if(post.isVoted){
          post.isVoted = false;
          post.votes--;
        } else {
          post.isVoted = true;
          post.votes++;
        }
      }
    )
  }

  public goToPostDetail(post: IPost): void {
    let postModal = this.modalCtrl.create(PostDetailPage, {post: post});
    postModal.present();
  }

  public openAdminModal(post: IPost): void {
    let adminModal = this.modalCtrl.create(PostToCurentPage, {postId: post._id});
    adminModal.present();
  }

  ionViewCanEnter(){
    this.authService.isAuthenticated.then((isAuth: boolean) => {
      if(!isAuth) this.navCtrl.push(HomePage);
    });
    return true;
  }

}
