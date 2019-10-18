import { Component, OnInit } from '@angular/core';
import { AngularFireAuth} from 'angularfire2/auth';
import { Profile } from '../../models/profile';
import { NavController } from '@ionic/angular';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profile = {} as Profile;

  constructor(private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase,
    public navCtrl: NavController, ) { 
    }

  createProfile() {
    this.afAuth.authState.subscribe(auth => {
      this.afDatabase.list('profiles/"${authenticatedUser.uid}"').push(this.profile),
      this.navCtrl.navigateForward('/dashboard');
    })
  }

  ngOnInit() {
  }

}
