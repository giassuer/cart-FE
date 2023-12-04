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
  savedTotal = Number(localStorage.getItem('total'));
  showPaymentArea = false;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    
    this.getProductsFromCart()
    this.calculateTotal();
  }

  getProductsFromCart() {
    this.cartService.getProductsFromCart().subscribe(r => {
      this.count = r.count;
      this.cartItems = r.products
      this.sendMessage();

    })
  }

  sendMessage() {
    this.cartService.sendCount(this.count);
  }

  calculateTotal(): any  {
    if (!this.savedTotal) {
      this.total = this.cartItems.reduce((total: any , product: any ) => total + Number(product.price), 0);
    }else {
      this.total = Number(this.savedTotal);
    }
    
  }

  changeQuantity(event: any, prod: any) {
    let quantityItem = Number(event.target.value);
    let data = {action: ""};
    if (quantityItem > prod.quantity) {
      data.action = 'add';
      this.total += +prod.price;
      this.saveDataToLocalStorage('total', this.total);
    } else if (quantityItem < prod.quantity) {
      data.action = 'subtract';
      this.total -= +prod.price;
      this.saveDataToLocalStorage('total', this.total);
    }

    this.cartService.editProductQuantity(prod.id, data).subscribe(r => {
      this.getProductsFromCart();
    })

  }

  saveDataToLocalStorage(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  showPayment() {
    this.showPaymentArea = true
  }

}
