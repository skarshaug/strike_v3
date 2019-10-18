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

  description: string;
  img: string;
  points: string;
  title: string;

  newStrikeCreate() {
    let newStrike = {};
    newStrike['description'] = this.description;
    newStrike['title'] = this.title;
    newStrike['img'] = this.img;
    this.af.list('/strikes').push(newStrike)
      .then(resp => {
        this.description = "";
        this.title = "";
        this.img = "";
        console.log(resp);
      })
        .catch(error => {
          console.log(error);
        })
  }


}


