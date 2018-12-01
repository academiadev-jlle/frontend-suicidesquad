import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './public/home/home.component';
import {UserLoginComponent} from './public/user-login/user-login.component';
import {UserRecoverPasswordComponent} from './public/user-recover-password/user-recover-password.component';
import {PetDetailComponent} from './shared/pet-detail/pet-detail.component';
import {LostPetsComponent} from './public/lost-pets/lost-pets.component';

const routes: Routes = [
{path: 'pet/:id/:slug', component: PetDetailComponent},
{path: 'pet/lost', component: LostPetsComponent},
{path: 'user/login', component: UserLoginComponent},
{path: 'user/recover', component: UserRecoverPasswordComponent},
{path: '**', component: HomeComponent},
];

@NgModule ( {
  imports: [
  CommonModule,
  RouterModule.forRoot ( routes )
  ],
  exports: [
  RouterModule
  ],
  declarations: []
} )
export class AppRoutingModule {
}
