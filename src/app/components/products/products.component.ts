import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products = 
  [
    {name: 'Prodotto 1', id:1},
    {name: 'Prodotto 2', id:2},
    {name: 'Prodotto 3', id:3}
  ];

  constructor() { }

  ngOnInit() {
  }

}
