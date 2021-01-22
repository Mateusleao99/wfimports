import { CarroselModule } from './shared/components/carrossel/carrossel.module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './shared/components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    CarroselModule,
    CarroselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
