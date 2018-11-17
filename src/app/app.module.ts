import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import {SharedModule} from './shared/shared.module';
import {PrivateModule} from './private/private.module';
import {PublicModule} from './public/public.module';
import { AppRoutingModule } from './app-routing.module';
import {CollapseModule} from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    PrivateModule,
    SharedModule,
    PublicModule,
    AppRoutingModule,
    CollapseModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
