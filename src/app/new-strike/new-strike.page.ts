import { Component, OnInit } from '@angular/core';

import { NavController, ModalController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'app-new-strike',
  templateUrl: './new-strike.page.html',
  styleUrls: ['./new-strike.page.scss'],
})
export class NewStrikePage implements OnInit {

  constructor(public af: AngularFireDatabase, private authService: AuthenticateService, private navCtrl: NavController) { }

  ngOnInit() {
  }

  newStrikedescription: string;
  newStrikeimg: string;
  newStrikepoints: string;
  newStriketitle: string;

  newStrikeCreate() {
    let newStrike = {};
    newStrike['description'] = this.newStrikedescription;
    newStrike['title'] = this.newStriketitle;
    newStrike['img'] = this.newStrikeimg;
    this.af.list('/strikes').push(newStrike)
      .then(resp => {
        this.newStrikedescription = "";
        this.newStriketitle = "";
        this.newStrikeimg = "";
        console.log(resp);
      })
      .catch(error => {
        console.log(error);
      })
  }


}


