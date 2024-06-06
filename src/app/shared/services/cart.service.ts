import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { CartItem } from '../models/cart-item';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: CartItem[] = [];
  private cartSubject: BehaviorSubject<CartItem[]> = new BehaviorSubject<
    CartItem[]
  >([]);
  public cart$ = this.cartSubject.asObservable().pipe(
    tap((cartItems) => {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    })
  );
  private cartStateSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  public cartState$ = this.cartStateSubject.asObservable();

  private checkoutStateSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  public checkoutState$ = this.checkoutStateSubject.asObservable();

  constructor(private notificationService: NotificationService) {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      this.cartItems = JSON.parse(storedCartItems);
      this.cartSubject.next(this.cartItems);
    }
  }

  addToCart(item: CartItem): void {
    const existingItem = this.cartItems.find(
      (i) => i.product.id === item.product.id
    );
    !existingItem &&
      this.notificationService.showSuccessToast('Producto agregado al carrito');

    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.cartItems.push(item);
    }
    this.cartSubject.next(this.cartItems);
  }

  cartHandler(): void {
    const newState = !this.cartStateSubject.getValue();
    this.cartStateSubject.next(newState);
  }
  checkoutHandler(): void {
    const newState = !this.checkoutStateSubject.getValue();
    this.checkoutStateSubject.next(newState);
  }

  removeFromCart(repuestoId: string): void {
    this.cartItems = this.cartItems.filter(
      (item) => item.product.id !== repuestoId
    );
    this.cartSubject.next(this.cartItems);
  }

  updateQuantity(productId: string, quantity: number): void {
    const item = this.cartItems.find((i) => i.product.id === productId);
    if (item) {
      item.quantity = quantity;
      this.cartSubject.next(this.cartItems);
    }
  }

  clearCart(): void {
    this.cartItems = [];
    this.cartSubject.next(this.cartItems);
  }

  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  getCartTotal(): number {
    return this.cartItems.reduce(
      (total, item) => total + item.product.priceNumber * item.quantity,
      0
    );
  }
}
