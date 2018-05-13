import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import {NavController, Toast, ToastController} from 'ionic-angular';

import { PostsPage } from '../posts/posts';
import { ProblemsPage } from '../problems/problems';
import { HistoryPage } from '../history/history';
import { UpcomingPage } from '../upcoming/upcoming';

import {AuthService} from '../../services';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

const EMAIL_REGEXP: RegExp = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

const validateEmail = control => EMAIL_REGEXP.test(control.value) ? null : {email: true};


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Storage]
})
export class HomePage {

  public form: FormGroup = (new FormBuilder()).group({
    email: ['', Validators.compose([Validators.required, validateEmail])],
    password: ['', Validators.compose([Validators.required])]
  });
  public submitted: boolean = false;

  constructor(public navCtrl: NavController, private authService: AuthService,
              private storage: Storage, private toast: ToastController) {}

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

  login(data: {email: string, password: string}): void {
    this.submitted = true;
    if(!this.form.valid) return;
    this.authService.login(data)
      .then(
        (res: {token: string, role: string}) => this.storage.ready().then(
          () =>{ this.storage.set('token', res.token);
                this.storage.set('role', res.role).then(() => {
                    this.goToPosts();
                    this.navCtrl.remove(0);
                  }
                );
          }),
        (err: any) => this.showToast('Username or password invalid')
      )
  }

  register(data: {email: string, password: string}): void {
    this.submitted = true;
    if(!this.form.valid) return;
    this.authService.register(data)
      .then(
        (res: any) => this.login(data),
        (err: any) => this.showToast(err.message)
      )
  }

  private showToast(message: string): void {
    let toast: Toast = this.toast.create({
      message: message,
      position: 'middle',
      showCloseButton: true,
      duration: 10000
    });
    toast.present()
  }

  public show = (input) => console.log(input);

  ionViewCanLeave(){
    this.authService.isAuthenticated.then((isAuth: boolean) => {
      return isAuth;
    })
  }

  ionViewCanEnter(){
    this.authService.isAuthenticated.then((isAuth: boolean) => {
      if(isAuth) this.navCtrl.push(PostsPage);
      this.navCtrl.remove(0);
      return !isAuth;
    })
  }

}
