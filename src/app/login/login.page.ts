import { Component, OnInit } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private menuCtrl: MenuController,
    private router: Router,
    private platform: Platform,
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
  ionViewWillLeave() {
    this.platform.ready().then(() => {
      this.platform.backButton.subscribeWithPriority(1, () => {});
    });
  }
  login() {
    this.router.navigate(['/home']);

  }

}
