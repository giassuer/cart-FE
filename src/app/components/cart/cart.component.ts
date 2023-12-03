import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  count: any;
  cartItems: any;
  total: any;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.getProductsFromCart()
  }

  getProductsFromCart() {
    this.cartService.getProductsFromCart().subscribe(r => {
      console.log(r);
      this.count = r.count;
      this.cartItems = r.products
      this.sendMessage();
      this.calculateTotal();
      
    })
  }

  sendMessage() {
    this.cartService.sendCount(this.count);
  }

  calculateTotal(): any  {
    this.total = this.cartItems.reduce((total: any , product: any ) => total + Number(product.price), 0);
    console.log('TOTAL', this.total);
  }

}
