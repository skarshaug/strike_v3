import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PakkeDetailsPage } from './pakke-details.page';

const routes: Routes = [
  {
    path: '',
    component: PakkeDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PakkeDetailsPage]
})
export class PakkeDetailsPageModule {}
