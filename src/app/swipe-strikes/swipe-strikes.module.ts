import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SwipeStrikesPage } from './swipe-strikes.page';

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
    RouterModule.forChild(routes)
  ],
  declarations: [SwipeStrikesPage]
})
export class SwipeStrikesPageModule {}
