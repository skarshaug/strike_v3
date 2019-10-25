import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-pakke-details',
  templateUrl: './pakke-details.page.html',
  styleUrls: ['./pakke-details.page.scss'],
})
export class PakkeDetailsPage implements OnInit {
  strikes: any[];
  russtrikes: any[];

  constructor(public af: AngularFireDatabase) {
    af.list('/strikes').valueChanges()
    .subscribe(result => {
      this.strikes = result;
      console.log(this.strikes);
  });

  af.list('/russtrikes').valueChanges()
    .subscribe(result => {
      this.strikes = result;
      console.log(this.strikes);
  });

   }

  ngOnInit() {
  }

}
