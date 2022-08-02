import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/types/product-types';
import { products } from './products-list';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products = products;

  title: string | undefined

  addProduct: string = '';
  addProducts: Array<string> = new Array();

  constructor() {}

  ngOnInit(): void {
    this.title = 'Product List'
  }

  addProductBtn() {
    this.addProducts.push(this.addProduct);
    this.addProduct='';
  }
}

// STUDY THE HERO EXAMPLE ON THE ANGULAR DOCUMENTATION
