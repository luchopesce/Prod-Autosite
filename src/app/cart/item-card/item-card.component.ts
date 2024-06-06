import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { CartService } from '../../shared/services/cart.service';
import { CartItem } from '../../shared/models/cart-item';
import { NotificationService } from '../../shared/services/notification.service';
import { Subject, map, takeUntil } from 'rxjs';
import { ApiService } from '../../shared/services/api.service';
import { ErrorHandlerService } from '../../shared/services/error.service';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.scss',
})
export class ItemCardComponent implements OnInit, OnDestroy {
  @Input() cartItem!: CartItem;

  private destroy$ = new Subject<void>();

  image = '';

  constructor(
    private cartService: CartService,
    private apiService: ApiService,
    private errorHandlerService: ErrorHandlerService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.getPartImage();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['cartItem']) {
      console.log(changes['cartItem'].currentValue.product.id);
      this.getPartImage();
    }
  }

  getPartImage(): void {
    this.apiService
      .getPartImage(this.cartItem.product.id.toString())
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (img) => {
          console.log(img.data[0]?.url);
          this.image = img.data[0]?.url;
        },
        error: (error) => {
          this.errorHandlerService.handleError(
            error,
            'Error al obtener imagen del repuesto'
          );
        },
      });
  }

  addQuantity(): void {
    this.cartService.updateQuantity(
      this.cartItem.product.id,
      this.cartItem.quantity + 1
    );
  }

  subtractQuantity(): void {
    if (this.cartItem.quantity === 1) {
      return this.deleteProduct();
    }
    this.cartService.updateQuantity(
      this.cartItem.product.id,
      this.cartItem.quantity - 1
    );
  }

  deleteProduct(): void {
    this.notificationService
      .showWarning(
        '¿Estas seguro que deseas eliminar este producto del carrito de compra?',
        'Eliminar producto',
        'Si, eliminar'
      )
      .then((result) => {
        if (result) {
          this.cartService.removeFromCart(this.cartItem.product.id);
        }
      });
  }
}
