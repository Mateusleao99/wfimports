import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.css'],
})

export class CarroselComponent {
  @Input() url: string;
  @Input() nomeFoto: string;
}
