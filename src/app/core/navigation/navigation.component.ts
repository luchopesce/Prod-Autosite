import {
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../../shared/services/cart.service';
import { CartItem } from '../../shared/models/cart-item';
import { Subject, takeUntil } from 'rxjs';
import { MatBadgeModule } from '@angular/material/badge';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatBadgeModule,
    CommonModule,
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent implements OnInit, OnDestroy {
  @Output() portraitValue = new EventEmitter<string>();

  private destroy$ = new Subject<void>();

  cart: CartItem[] = [];
  menuOpen = false;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.getCart();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeCartState(): void {
    this.cartService.cartHandler();
  }

  changePortrait(value: string): void {
    this.portraitValue.emit(value);
    this.handleMenu();
  }

  private getCart(): void {
    this.cartService.cart$.pipe(takeUntil(this.destroy$)).subscribe((cart) => {
      this.cart = cart;
    });
  }

  getCartLength(): number {
    return this.cart.reduce((acc, item) => acc + item.quantity, 0);
  }

  handleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
  prueba(): void {
    console.log('prueba');
  }
}
