import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { RealEstateListComponent } from './real-estate/real-estate-list/real-estate-list.component';
import { RealEstateFormComponent } from './real-estate/real-estate-form/real-estate-form.component';
import { RealEstateViewComponent } from './real-estate/real-estate-view/real-estate-view.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './user/profile/profile.component';
import { RealEstateComponent } from './real-estate/real-estate.component';
import { RealEstateEditComponent } from './real-estate/real-estate-edit/real-estate-edit.component';
 
const routes: Routes = [
  { path: '', component: RealEstateComponent },
  { path: 'users', component: UserListComponent },
  { path: 'add-real-estate', component: RealEstateFormComponent },
  { path: 'real-estate/:realEstateId', component: RealEstateViewComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'my-listings/:userId', component: RealEstateListComponent },
  { path: 'edit-real-estate/:realEstateId', component: RealEstateEditComponent}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
