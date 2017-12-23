import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  @Input() products: any;
  productDescription: any[];
  selectedProduct: any;
  showDetails: boolean;

  constructor() { }

  ngOnInit() {
  }

  onShowDetails(product: any) {
    this.showDetails = true;
    this.selectedProduct = product;
  }

  hideDetails(event) {
    this.showDetails = false;
  }

  splitString(str) {
    const stringArray = str.split('(');
    return stringArray;
  }

}
