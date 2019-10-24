import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';


import { StrikeDetailsPage } from './strike-details.page';

const routes: Routes = [
  {
    path: '',
    component: StrikeDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ]
  ,
  
  declarations: [StrikeDetailsPage]
})
export class StrikeDetailsPageModule {}
