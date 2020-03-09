import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserService } from './service/user.service';
import { RealEstateService } from './service/real-estates.service';
import { RealEstateListComponent } from './real-estate/real-estate-list/real-estate-list.component';
import { RealEstateFormComponent } from './real-estate/real-estate-form/real-estate-form.component';
 
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    RealEstateListComponent,
    RealEstateFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService, RealEstateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
