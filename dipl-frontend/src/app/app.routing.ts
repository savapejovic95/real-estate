import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { RealEstateListComponent } from './real-estate/real-estate-list/real-estate-list.component';
import { RealEstateFormComponent } from './real-estate/real-estate-form/real-estate-form.component';
import { RealEstateViewComponent } from './real-estate/real-estate-view/real-estate-view.component';
 
const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'add-user', component: UserFormComponent },
  { path: 'all', component: RealEstateListComponent },
  { path: 'add-real-estate', component: RealEstateFormComponent },
  { path: 'real-estate', component: RealEstateViewComponent}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
