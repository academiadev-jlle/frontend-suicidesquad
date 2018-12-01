import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {PetListItemComponent} from './pet-list-item/pet-list-item.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {CommonModule} from '@angular/common';
import {PetDetailComponent} from './pet-detail/pet-detail.component';
import { CardComponent } from './card/card.component';
import {RouterModule} from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { FormErrorMessageComponent } from './form-error-message/form-error-message.component';

@NgModule ( {
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  declarations: [
    PetListItemComponent,
    FooterComponent,
    HeaderComponent,
    PetDetailComponent,
    FormErrorMessageComponent,
    CardComponent,
  ],
  exports: [
    PetListItemComponent,
    FooterComponent,
    HeaderComponent,
    PetDetailComponent,
    FormErrorMessageComponent,
  ]
} )
export class SharedModule {
}
