import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddNewFriendsPage } from './add-new-friends.page';

const routes: Routes = [
  {
    path: '',
    component: AddNewFriendsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddNewFriendsPage]
})
export class AddNewFriendsPageModule {}
