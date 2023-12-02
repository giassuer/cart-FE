import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

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

  constructor
  (
    private  _router: Router,
    private  _route: ActivatedRoute,
  ) 
  { }

  ngOnInit() {
  }

  navTo(path: string) {
    this._router.navigate([path]);
  }

}
