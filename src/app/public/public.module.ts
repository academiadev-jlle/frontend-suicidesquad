import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { LostPetsComponent } from './lost-pets/lost-pets.component';
import { UserLoginComponent } from './user-login/user-login.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [
    HomeComponent,
    LostPetsComponent,
    UserLoginComponent,
  ],
  exports: [
    HomeComponent
  ]
})
export class PublicModule { }
