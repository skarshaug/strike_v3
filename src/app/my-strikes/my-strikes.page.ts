import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-my-strikes',
  templateUrl: './my-strikes.page.html',
  styleUrls: ['./my-strikes.page.scss'],
})
export class MyStrikesPage implements OnInit {

  constructor(  private navCtrl: NavController,) { 

    
  }

  ngOnInit() {
  }


  
  goToStrike(){
    this.navCtrl.navigateForward('/strike-details');
  }

}
