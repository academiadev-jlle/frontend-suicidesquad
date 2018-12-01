import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './public/home/home.component';
import {PetDetailComponent} from './shared/pet-detail/pet-detail.component';
import {LostPetsComponent} from './public/lost-pets/lost-pets.component';
import {FormularioCadastroUsuarioComponent} from './shared/formulario-cadastro-usuario/formulario-cadastro-usuario.component';
import { PetRegisterComponent } from './private/pet-register/pet-register.component';

const routes: Routes = [
  {path: 'pet/:id/:slug', component: PetDetailComponent},
  {path: 'pet/lost', component: LostPetsComponent},
  {path: 'pet/register', component: PetRegisterComponent},
  {path: 'user/register', component: FormularioCadastroUsuarioComponent},
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
