import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navbar = 
  [
    {label: 'Products', path: 'Products', type: 'btn'},
    {label: 'shopping_cart', path: 'carrello', type: 'icon'}
  ]

  count: any;

  constructor
  (
    private  _router: Router,
    private  _route: ActivatedRoute,
    private cartService: CartService
  ) 
  { }

  ngOnInit() {
    this.getCartCount()
  }

  navTo(path: string) {
    this._router.navigate([path]);
  }

  getCartCount() {
    // this.cartService.currentCartCount.subscribe((count) => {
    //   this.count = count;
    //   console.log('count', this.count);
      
    // });
    this.cartService.data$.subscribe((data) => {
      this.count = data;
      console.log('count', this.count);
    });
  }

}
