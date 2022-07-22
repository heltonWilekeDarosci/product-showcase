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
    name: "Cookies",
    price: 3.50,
    status: 'sold-out'
  }, {
    id: 2,
    name: "Ham",
    price: 5.50,
    status: 'in-stock'
  }, {
    id: 3,
    name: "Cheese",
    price: 4.0,
    status: 'in-stock'
  }, {
    id: 4,
    name: "Red Wine",
    price: 7.50,
    status: 'sold-out'
  }, {
    id: 5,
    name: "Chocolate bar",
    price: 2.50,
    status: 'in-stock'
  }]

  title: string | undefined

  addProduct:string='';
  addProducts:Array<string> = new Array();

  constructor() {}

  ngOnInit(): void {
    this.title = 'Product List'
  }

  addProductBtn(){
    this.addProducts.push(this.addProduct);
    this.addProduct='';
  }
}

// STUDY THE HERO EXAMPLE ON THE ANGULAR DOCUMENTATION