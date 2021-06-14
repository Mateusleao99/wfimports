import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-tela-inicio',
  templateUrl: './tela-inicio.component.html',
  styleUrls: ['./tela-inicio.component.css']
})
export class TelaInicioComponent implements OnInit {
  produto:any = [];

  constructor(private produtoService: ProdutoService) {}

  ngOnInit() {
    this.produto = this.produtoService.getProdutos();
  }

}
