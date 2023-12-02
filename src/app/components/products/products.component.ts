import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: any[] = [];
  count: any

  productParams = {
    pagination: {
        index: 0,
        size: 12
    }
  }

  constructor
  (
    private productService: ProductService
  ) 
  { }

  ngOnInit() {
    this.getProducts();
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

}
