import { cartProductAdapter } from './../../shared/adapters/cartProduct.adapter';
import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { ApiService } from '../../shared/services/api.service';
import { ImageCarResponse } from '../../shared/models/imageResponse.model';
import { Router } from '@angular/router';
import { CartService } from '../../shared/services/cart.service';
import { Subject, of, takeUntil, tap } from 'rxjs';
import { ProductCardModel } from '../../shared/models/product-card.model';
import { ErrorHandlerService } from '../../shared/services/error.service';
import { UtilsService } from '../../shared/services/utils.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatProgressBarModule,
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit, OnDestroy {
  @Input() productCard!: ProductCardModel;

  private destroy$ = new Subject<void>();

  whatsApp: string = '';

  image = '';

  constructor(
    private apiService: ApiService,
    private route: Router,
    private cartService: CartService,
    private errorHandlerService: ErrorHandlerService,
    private utilsService: UtilsService
  ) {}

  ngOnInit(): void {
    // this.getProductsImages();
    this.getContact();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['productCard'] && changes['productCard'].currentValue.id) {
      this.getProductsImages();
    }
  }

  formatPrice(price: string): string {
    if (price === 'A Consultar') return 'A Consultar';

    return this.utilsService.formatPrice(Number(price), 'ARS', 'es-AR');
  }

  formatNumber(number: number): string {
    return this.utilsService.formatNumber(number);
  }

  goToDetail(): void {
    this.apiService.selectProduct(this.productCard);
    let routePath: string;

    if (this.productCard.cardStyle === 'auto-parts') {
      routePath = `/detail/autopart/${this.productCard.id}`;
    } else {
      routePath = `/detail/vehicle/${this.productCard.id}`;
    }

    this.route.navigate([routePath]);
  }

  addToCart(): void {
    this.cartService.addToCart(cartProductAdapter(this.productCard));
  }

  private getProductsImages(): void {
    if (this.productCard.cardStyle === 'auto-parts') {
      this.apiService
        .getPartImage(this.productCard.id.toString())
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (img) => {
            this.image = img.data[0]?.url;
          },
          error: (error) => {
            this.errorHandlerService.handleError(
              error,
              'Error al obtener imagen del repuesto'
            );
          },
        });
    } else {
      if (this.productCard.kilometraje === 0) {
        this.apiService
          .getVehicleOKMImage(this.productCard.id.toString())
          .pipe(takeUntil(this.destroy$))
          .subscribe({
            next: (img: ImageCarResponse) => {
              console.log(img.data[0]?.url);
              this.image = img.data[0]?.url;
            },
            error: (error) => {
              this.errorHandlerService.handleError(
                error,
                'Error al obtener imagen del vehiculo'
              );
            },
          });
      } else {
        this.apiService
          .getVehicleUsedImage(this.productCard.id.toString())
          .pipe(takeUntil(this.destroy$))
          .subscribe({
            next: (img: ImageCarResponse) => {
              console.log(img.data[0]?.url);
              this.image = img.data[0]?.url;
            },
            error: (error) => {
              this.errorHandlerService.handleError(
                error,
                'Error al obtener imagen del vehiculo'
              );
            },
          });
      }
    }
  }

  private getContact(): void {
    this.apiService
      .getContactInfo('Whatsapp')
      .pipe(
        takeUntil(this.destroy$),
        tap({
          next: (data) => {
            if (
              data &&
              data.length > 0 &&
              data[0].Valor &&
              typeof data[0].Valor === 'string'
            ) {
              const number = this.utilsService.formatWhatsAppNumber(
                data[0].Valor
              );
              this.whatsApp = `https://wa.me/${number}`;
            }
          },
          error: (error) => {
            this.errorHandlerService.handleError(
              error,
              'Error al obtener la información de WhatsApp'
            );
            return of([]);
          },
        })
      )
      .subscribe();
  }
}
