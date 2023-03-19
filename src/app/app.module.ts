import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeptoListComponent } from './depto-list/depto-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DeptoAddComponent } from './depto-add/depto-add.component';
import { MunicipioListComponent } from './municipio-list/municipio-list.component';
import { DeptoDetailsComponent } from './depto-details/depto-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DeptoListComponent,
    DeptoAddComponent,
    MunicipioListComponent,
    DeptoDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
