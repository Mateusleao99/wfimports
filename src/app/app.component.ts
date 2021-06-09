import { ProdutoService } from './services/produto.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  produto:any = [];

  constructor(private produtoService: ProdutoService) {}

  ngOnInit() {
    this.produto = this.produtoService.getProdutos();
  }
}
