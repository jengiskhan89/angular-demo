import { Component } from '@angular/core';
import {Product,Products} from './data.product'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "this is basic";
  styleColor = {
    "color": "yellow",
    "font-size": '25px',
    "border-radius": '5px'
  }
 products : Product[] = Products;
 message?:string;
//  selectProduct?:Product;
selectedProduct?:Product;
 selectProduct(p:Product) {
  this.selectedProduct = p;
  // console.log(p);
  
 }
 getProduct(e:Product) {
   this.message = `${e.name} you order success, tks you!`
   console.log(this.message);
   
 }
 showResult(e) {
   console.log(e);
   
   return e
   
 }
}
