import { RouterModule } from "@angular/router";
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CarroselModule } from './shared/components/carrossel/carrossel.module';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './shared/components/card/card.component';
import { TelaInicioComponent } from './page/tela-inicio/tela-inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TelaInicioComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    CoreModule,
    CarroselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
