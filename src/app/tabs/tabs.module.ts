import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
    { 
      path: 'dashboard', 
      loadChildren: '../dashboard/dashboard.module#DashboardPageModule' 
    },
    { 
      path: 'swipe-strikes', 
      loadChildren: '../swipe-strikes/swipe-strikes.module#SwipeStrikesPageModule' 
    },
    { 
      path: 'packages', 
      loadChildren: '../packages/packages.module#PackagesPageModule' 
    },        
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
