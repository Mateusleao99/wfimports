import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { CarroselComponent } from './carrosel.component';

@NgModule({
  declarations: [ CarroselComponent ],
  exports: [ CarroselComponent],
  imports: [ CommonModule ]
})
export class CarroselModule {}
