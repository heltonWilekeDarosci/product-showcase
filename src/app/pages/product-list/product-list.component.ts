import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/types/product-types';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor() {}

  ngOnInit(): void {
  }
}

// STUDY THE HERO EXAMPLE ON THE ANGULAR DOCUMENTATION

