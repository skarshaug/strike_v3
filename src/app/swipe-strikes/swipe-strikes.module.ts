import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SwipeStrikesPage } from './swipe-strikes.page';
import { SwingModule } from 'angular2-swing';

const routes: Routes = [
  {
    path: '',
    component: SwipeStrikesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SwipeStrikesPage]
})
export class SwipeStrikesPageModule {}
