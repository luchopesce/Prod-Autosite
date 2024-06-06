import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './core/footer/footer.component';
import { NavigationComponent } from './core/navigation/navigation.component';
import { HeaderComponent } from './core/header/header.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './shared/services/cart.service';
import { takeUntil, Subject, combineLatest } from 'rxjs';
import { WhatsAppButtonComponent } from './shared/components/whats-app-button/whats-app-button.component';
import { CheckoutComponent } from './cart/checkout/checkout.component';
import { ApiService } from './shared/services/api.service';
import { ErrorHandlerService } from './shared/services/error.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    CartComponent,
    WhatsAppButtonComponent,
    CheckoutComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  title = 'autosite';
  isOpen!: boolean;
  checkIsOpen!: boolean;
  logo!: string;

  constructor(
    private cartService: CartService,
    private apiService: ApiService,
    private errorHandlerService: ErrorHandlerService
  ) {}

  ngOnInit(): void {
    this.cartHandler();
    this.getLogo();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private cartHandler(): void {
    combineLatest([
      this.cartService.cartState$,
      this.cartService.checkoutState$,
    ])
      .pipe(takeUntil(this.destroy$))
      .subscribe(([cartState, checkoutState]) => {
        this.isOpen = cartState;
        this.checkIsOpen = checkoutState;
      });
  }

  private getLogo(): void {
    this.apiService
      .getContactInfo('logo_pordefecto')
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res: [{ Valor: string }]) => {
          this.logo = res[0].Valor;
        },
        error: (error) => {
          this.errorHandlerService.handleError(error, 'Error al obtener logo');
        },
      });
  }
}
