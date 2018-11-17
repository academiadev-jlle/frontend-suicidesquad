import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { LostPetsComponent } from './lost-pets/lost-pets.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    LostPetsComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class PublicModule { }
