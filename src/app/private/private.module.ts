import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetRegisterComponent } from './pet-register/pet-register.component';
import { SharedModule} from '../shared/shared.module';
import { ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  declarations: [PetRegisterComponent]
})
export class PrivateModule { }
