import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, tap } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

const API_URL = 'http://127.0.0.1:8000/api';

@Injectable({
  providedIn: 'root'
})
export class CartService {

constructor(private http: HttpClient) { }

private cartCount = new BehaviorSubject<string>('');
data$ = this.cartCount.asObservable();

  sendCount(count: string) {
    this.cartCount.next(count);
  }

/**
     * recupera i prodotti nel carrello
     * @param product prodotto
     */
getProductsFromCart(): Observable<any> {
  return this.http.get<any>(
      `${API_URL}/cart`);
}

editProductQuantity(productId: any, action: any): Observable<any> {
  return this.http.put<any>(
      `${API_URL}/cart/${productId}`, action);
}

}
