import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

const API_URL = 'http://127.0.0.1:8000/api';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

constructor(private http: HttpClient) { }

/**
     * recupera una lista di prodotti
     * @param pagination paginazione
     */
getProducts(pagination: any): Observable<any> {
  return this.http.post<any>(
      `${API_URL}/products`, pagination);
}

/**
     * aggiunge un prodotto al carrello
     * @param product prodotto
     */
addProductToCart(product: any): Observable<any> {
  return this.http.post<any>(
      `${API_URL}/cart`, product);
}

}
