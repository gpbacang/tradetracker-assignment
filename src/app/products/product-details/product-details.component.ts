import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnChanges {
  @Input() product: any;
  @Input() showDetails = false;
  @Output() hideDetails = new EventEmitter();
  productDescription: string[];

  constructor() { }

  ngOnInit() {
    this.productDescription = this.product.description[0].split('\n');
  }

  ngOnChanges(changes) {
    if (this.showDetails === true) {
      setTimeout(() => {
        $('.ui.modal').modal({
          onHide: () => {
            this.hideDetails.emit();
          }
        }).modal('show');
      }, 50);
      setTimeout(() => {
        $('.menu .item').tab({
          context: 'parent'
        });
      }, 1000);
    }
  }

  onHideDetails() {
    this.hideDetails.emit();
    $('.ui.modal').modal('hide');
  }

}
