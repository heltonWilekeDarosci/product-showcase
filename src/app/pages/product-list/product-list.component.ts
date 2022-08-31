import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/types/product-types';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  products: Product[] = [];

}

// STUDY THE HERO EXAMPLE ON THE ANGULAR DOCUMENTATION

