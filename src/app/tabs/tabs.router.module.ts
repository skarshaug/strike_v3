import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}