import { Component, OnInit } from '@angular/core';

import { NavController, ModalController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-swipe-strikes',
  templateUrl: './swipe-strikes.page.html',
  styleUrls: ['./swipe-strikes.page.scss'],
})
export class SwipeStrikesPage implements OnInit {

  userEmail: string;
  strikes: any[];

  constructor(public af: AngularFireDatabase, private authService: AuthenticateService, private navCtrl: NavController) {
    af.list('/strikes').valueChanges()
      .subscribe(result => {
        this.strikes = result;
        console.log(this.strikes);
      });

   }

  ngOnInit() {
    if(this.authService.userDetails()){
      this.userEmail = this.authService.userDetails().email;
    }else{
      this.navCtrl.navigateBack('');
    }
  }

}
