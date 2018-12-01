import { NgModule } from '@angular/core';
import { PetListItemComponent } from './pet-list-item/pet-list-item.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MessageComponent } from './message/message.component';

@NgModule ( {
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [
    PetListItemComponent,
    FooterComponent,
    HeaderComponent,
    PetDetailComponent,
    MessageComponent
  ],
  exports: [
    PetListItemComponent,
    FooterComponent,
    HeaderComponent,
    PetDetailComponent,
    MessageComponent
  ]
} )
export class SharedModule {
}
