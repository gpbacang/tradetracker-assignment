import { Component, OnInit } from '@angular/core';
import { ProductService } from './shared/products.service';
import * as xml2js from 'xml2js';

declare var $: any;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: any;
  _products: any;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    $('.ui.dropdown').dropdown();
  }

  onSubmit(url) {
    this.productService.getProducts(url).subscribe(
      data => {
        let jsonData;
        xml2js.parseString(data, function (err, result) {
          jsonData = result.products.product;
        });
        this.products = jsonData;

        $('.ui.dropdown').dropdown({
          onChange: (value, text) => {
            this.products.map((product) => {
              if (product.productID[0] === value) {
                this._products = this.products;
                this.products = [product];
              }
            });
          }
        });
      }
    );
  }

  onReset() {
    $('.ui.dropdown').dropdown('restore defaults');
    this.products = this._products;
  }

}
