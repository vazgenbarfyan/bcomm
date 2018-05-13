import {Component, Input} from '@angular/core';
import {NavController} from "ionic-angular";
import {PostsPage} from "../posts/posts";
import {ProblemsPage} from "../problems/problems";
import {UpcomingPage} from "../upcoming/upcoming";
import {HistoryPage} from "../history/history";


@Component({
  template: `<ion-menu background="hem_purple" type="overlay" [content]="cont">
    <ion-content>
      <ion-list>
        <button class="menu_btn_item" (click)="goToExistingProblems();"><i class="fa fa-list-alt" aria-hidden="true"></i> &nbsp; Հրատապ խնդիրներ </button>
      </ion-list>
      <ion-list>
        <button class="menu_btn_item" (click)="goToUpcomingProblems();"><i class="fa fa-arrow-circle-right" aria-hidden="true"></i> &nbsp; Առկա խնդիրներ</button>
      </ion-list>
      <ion-list>
        <button class="menu_btn_item" (click)="goToHistory();"><i class="fa fa-history" aria-hidden="true"></i>  &nbsp; Պատմություն</button>
      </ion-list>
      <!-- <ion-list>
        <ion-item class="menu_btn_item" menuClose detail-none button-icon><i class="fa fa-times" aria-hidden="true"></i> &nbsp; Close Menu</ion-item>
      </ion-list> -->
    </ion-content>
  </ion-menu>`,
  selector: 'app-sidebar'
})
export class Sidebar {
  @Input() cont;

  constructor(private navCtrl: NavController){}

  goToPosts(){
    this.navCtrl.push(PostsPage);
  }

  goToExistingProblems(){
    this.navCtrl.push(ProblemsPage);
  }

  goToUpcomingProblems(){
    this.navCtrl.push(UpcomingPage);
  }

  goToHistory(){
    this.navCtrl.push(HistoryPage);
  }

}
