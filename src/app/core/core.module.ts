import { CarroselModule } from './../shared/components/carrossel/carrossel.module';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations:[ HeaderComponent],
  exports: [ HeaderComponent],
  imports: [
    CommonModule,
    CarroselModule
  ]
})
export class CoreModule{}
