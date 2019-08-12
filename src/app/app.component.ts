import { Component } from '@angular/core';
import {Product,Products} from './data.product'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "this is basic";
 products : Product[] = Products;
//  selectProduct?:Product;
selectedProduct?:Product;
 selectProduct(p:Product) {
  this.selectedProduct = p;
  console.log(p);
  
 }
}
