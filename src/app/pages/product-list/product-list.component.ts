import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/types/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [{
    id: 1,
    name: "Bolacha",
    price: 30,
    status: 'sold'
  }, {
    id: 2,
    name: "Biscoito",
    price: 40,
    status: 'in-stock'
  }]

  title: string | undefined

  constructor() {}

  ngOnInit(): void {
    this.title = 'Product List'
  }

  showTitle() {
    console.log(this.title)
  }
}
