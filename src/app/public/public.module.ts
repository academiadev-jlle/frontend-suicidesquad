import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { LostPetsComponent } from './lost-pets/lost-pets.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  declarations: [
    HomeComponent,
    LostPetsComponent,
    UserRegisterComponent,
  ],
  exports: [
    HomeComponent,
    UserRegisterComponent,
  ]
})
export class PublicModule { }
