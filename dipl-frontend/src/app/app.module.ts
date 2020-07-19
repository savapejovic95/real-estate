import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserService } from './service/user.service';
import { RealEstateService } from './service/real-estates.service';
import { RealEstateListComponent } from './real-estate/real-estate-list/real-estate-list.component';
import { RealEstateFormComponent } from './real-estate/real-estate-form/real-estate-form.component';
import { FilterComponent } from './real-estate/filter/filter.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UploadImagesComponent } from './real-estate/real-estate-form/upload-images/upload-images.component';
import { RealEstateViewComponent } from './real-estate/real-estate-view/real-estate-view.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './user/profile/profile.component';
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { RealEstateComponent } from './real-estate/real-estate.component';
 
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    RealEstateListComponent,
    RealEstateFormComponent,
    FilterComponent,
    TopMenuComponent,
    UploadImagesComponent,
    RealEstateViewComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    RealEstateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule
  ],
  providers: [UserService, RealEstateService, authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
