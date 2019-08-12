import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Product } from '../data.product';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor() { }
  @Input() product : Product;
  @Input('title') titleBox:string;
  @Output() bookEvent = new EventEmitter<Product>();
  ngOnInit() {
    console.log(this.titleBox);
    
  }
  order() {
    this.bookEvent.emit(this.product);
    // console.log(this.);
    
  }

}
