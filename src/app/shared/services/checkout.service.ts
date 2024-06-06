import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CartItem } from '../models/cart-item';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  createOrder(order: any): Observable<any> {
    const url = `${this.apiUrl}/api/orders`;
    return this.http.post(url, order);
  }

  getOrderDetails(orderId: string): Observable<any> {
    const url = `${this.apiUrl}/api/orders/${orderId}`;
    return this.http.get(url);
  }

  generateInvoice(cartItems: CartItem[], customerData: any): Observable<any> {
    const url = `${this.apiUrl}/api/invoices`;
    const invoiceData = {
      cartItems,
      customerData,
    };
    return this.http.post(url, invoiceData);
  }

  sendInvoiceEmail(invoiceId: string): Observable<any> {
    const url = `${this.apiUrl}/api/invoices/${invoiceId}/email`;
    return this.http.post(url, {});
  }
}
