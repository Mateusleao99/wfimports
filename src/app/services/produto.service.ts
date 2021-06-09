import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ProdutoService {
  constructor() {}

  getProdutos() {
    {
      let produtos:any = [
      {
        url: "../../../../assets/img/relogios/relogio.png",
        description: "Relógio Digital Mormai",
        nomeProduto: "Relógio Digital Mormai MO3415 - Masculino",
        valorProduto: "R$139,90",
        parcelaProduto: "Até 4x de R$50,00 sem juros",
      },
      {
        url: "../../../../assets/img/relogios/relogio.png",
        description: "A Linha Carbon é desenvolvida com materiais diferenciados e alta percepção de valor",
        nomeProduto: "Relógio Technos Masculino Analógico Prata OS10EQ/1P OS10EQ/1P - Verde",
        valorProduto: "R$779,90",
        parcelaProduto: "até 10x de R$ 77,99 sem juros",
      },
      {
        url: "../../../../assets/img/relogios/relogio2.jpg",
        description: " Modelo: SportVidro: Cristal MineralMaterial da máquina: AcetatoMaterial da Pulseira: Silicone",
        nomeProduto: "Relógio Orizom Prova D'água Masculino KRS115 - Preto",
        valorProduto: "R$95,90",
        parcelaProduto: "até 10x de R$ 95,90 sem juros",
      },
      {
        url: "../../../../assets/img/relogios/relogio3.jpg",
        description: "Marca: Technos- Modelo: Sports- Genêro: Masculino- Garantia: 1 Ano em Toda Rede de Assistência Técnica Technos no BrasilCaracterísticas",
        nomeProduto: "RELÓGIO TECHNOS MASCULINO PERFORMACE RACER 2115MTT/8P - Dourado",
        valorProduto: "R$299,00",
        parcelaProduto: "até 10x de R$ 29,00 sem juros",
      },
      {
        url: "../../../../assets/img/relogios/relogio4.jpg",
        description: "Marca: Technos- Modelo: Sports- Genêro: Masculino- Garantia: 1 Ano em Toda Rede de Assistência Técnica Technos no BrasilCaracterísticas-",
        nomeProduto: "RELÓGIO TECHNOS MASCULINO PERFORMACE RACER 2115MTT/8P - Dourado",
        valorProduto: "R$ 299,00",
        parcelaProduto: "até 10x de R$ 29,99 sem juros",
      },
      ];
      return produtos;
    }
  }
}
