import { Component, OnInit, Input } from '@angular/core';
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
  ngOnInit() {
    console.log(this.product);
    
  }

}
