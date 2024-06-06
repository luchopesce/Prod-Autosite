import { CommonModule } from '@angular/common';
import { Subject, combineLatest, map, takeUntil } from 'rxjs';
import { CartService } from './../shared/services/cart.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ItemCardComponent } from './item-card/item-card.component';
import { CartItem } from '../shared/models/cart-item';
import { CheckoutComponent } from './checkout/checkout.component';
import { NotificationService } from '../shared/services/notification.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ItemCardComponent, CheckoutComponent, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  cart!: CartItem[];
  isHome = false;
  checkOutState!: boolean;
  isOpen!: boolean;

  constructor(
    private cartService: CartService,
    private notificationService: NotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartHandler();
    this.getUrl();
  }

  ngOnDestroy(): void {
    if (this.destroy$) {
      this.destroy$.next();
      this.destroy$.complete();
    }
  }

  checkoutHandler(): void {
    this.cartService.checkoutHandler();
  }

  changeCartState(): void {
    this.cartService.cartHandler();
  }

  getTotal(): number {
    return this.cartService.getCartTotal();
  }

  clearCart(): void {
    this.notificationService
      .showWarning(
        '¿Estas seguro que deseas eliminar todos los producto del carrito de compra?',
        'Eliminar productos',
        'Si, eliminar'
      )
      .then((result) => {
        if (result) {
          this.cartService.clearCart();
        }
      });
  }

  getCartLength(): number {
    return this.cart.reduce((acc, item) => acc + item.quantity, 0);
  }

  exploreCatalog(): void {
    this.router.navigate(['/products/auto-parts']);
    this.cartService.cartHandler();
  }

  private cartHandler(): void {
    combineLatest([this.cartService.cartState$, this.cartService.cart$])
      .pipe(
        takeUntil(this.destroy$),
        map(([cartState, cartItems]) => {
          this.cart = cartItems;
          this.isOpen = cartState;
        })
      )
      .subscribe();
  }

  private getUrl(): void {
    this.isHome = this.router.url.split('/')[1].includes('home');
    this.router.events.pipe(takeUntil(this.destroy$)).subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isHome = event.url.split('/')[1].includes('home');
      }
    });
  }
}
