import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: any[] = [];
  count: any
  cartCount: any;

  productParams = {
    pagination: {
        index: 0,
        size: 12
    }
  }

  constructor
  (
    private productService: ProductService,
    private cartService: CartService
  ) 
  { }

  ngOnInit() {
    this.getProducts();
    this.getProductsFromCart()
  }

  getProducts() {
    this.productService.getProducts(this.productParams).subscribe(r => {
      this.products = r.products
      this.count = r.count
    })
  }

  onPageChange(event: PageEvent): void {
    const pageIndex = event.pageIndex;
    this.productParams.pagination.index = pageIndex;
    this.getProducts()
  }

  addToCart(product: any) {
    console.log(product);
    let prod = 
    {
      name: product.name,
      description: product.description,
      price: product.price
    }
    
    this.productService.addProductToCart(prod).subscribe(r => {
      this.getProductsFromCart()
    })
  }

  getProductsFromCart() {
    this.cartService.getProductsFromCart().subscribe(r => {
      console.log(r);
      this.cartCount = r.count;
      this.sendMessage();
      
    })
  }

  sendMessage() {
    this.cartService.sendCount(this.cartCount);
  }

}
