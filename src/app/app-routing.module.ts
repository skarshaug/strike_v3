import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
const routes: Routes = [
  //{ path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'swipe-strikes', loadChildren: './swipe-strikes/swipe-strikes.module#SwipeStrikesPageModule' },
  { path: 'strike-details', loadChildren: './strike-details/strike-details.module#StrikeDetailsPageModule' },
  { path: 'wall', loadChildren: './wall/wall.module#WallPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'packages', loadChildren: './packages/packages.module#PackagesPageModule' },
  { path: 'new-strike', loadChildren: './new-strike/new-strike.module#NewStrikePageModule' },
  { path: 'my-strikes', loadChildren: './my-strikes/my-strikes.module#MyStrikesPageModule' },
  { path: 'my-friends', loadChildren: './my-friends/my-friends.module#MyFriendsPageModule' },
  { path: 'invite-friends', loadChildren: './invite-friends/invite-friends.module#InviteFriendsPageModule' },
  { path: 'add-new-friends', loadChildren: './add-new-friends/add-new-friends.module#AddNewFriendsPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },  { path: 'pakke-details', loadChildren: './pakke-details/pakke-details.module#PakkeDetailsPageModule' }

];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
