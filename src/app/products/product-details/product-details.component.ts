import { Component, OnInit, OnDestroy } from '@angular/core';
import { DetailCarouselComponent } from '../detail-carousel/detail-carousel.component';
import { MatIconModule } from '@angular/material/icon';
import { DetailFormComponent } from '../detail-form/detail-form.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subject, forkJoin, map, of, takeUntil, tap } from 'rxjs';
import { ApiService } from '../../shared/services/api.service';
import { ProductCardModel } from '../../shared/models/product-card.model';
import { cartProductAdapter } from '../../shared/adapters/cartProduct.adapter';
import { CartService } from '../../shared/services/cart.service';
import { ErrorHandlerService } from '../../shared/services/error.service';
import { UtilsService } from '../../shared/services/utils.service';
import { NotificationService } from '../../shared/services/notification.service';
import { vehicleAdapter } from '../../shared/adapters/vehicle.adapter';
import { FilterToApplyModel } from '../../shared/models/filterToApply.model';
import { VehicleFilterPipe } from '../../shared/pipes/vehicleFilter.pipe';
import { autoPartAdapter } from '../../shared/adapters/autoPart.adapter';
import { AutoPartFilterPipe } from '../../shared/pipes/autoPartFilter.pipe';
import { RelatedCarFilterPipe } from '../../shared/pipes/relatedCar.pipe';
import { RelatedPartFilterPipe } from '../../shared/pipes/relatedPart.pipe';

@Component({
  selector: 'app-product-details',
  standalone: true,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
  imports: [
    DetailCarouselComponent,
    MatIconModule,
    DetailFormComponent,
    CarouselComponent,
    CommonModule,
    VehicleFilterPipe,
    AutoPartFilterPipe,
    RelatedCarFilterPipe,
    RelatedPartFilterPipe,
  ],
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  isVehicle: boolean = false;
  productToShow!: ProductCardModel;
  productImages = [];
  whatsApp: string = '';
  productCard: ProductCardModel[] = [];
  filtersToApply: FilterToApplyModel = {
    anio: [],
    combustible: [],
    marca: [],
    tipo: [],
    familia: [],
    condicion: '',
    kmsMax: 158400,
    kmsMin: 0,
    priceMax: 8000000,
    priceMin: 0,
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService,
    private cartService: CartService,
    private errorHandlerService: ErrorHandlerService,
    private utilsService: UtilsService,
    private notificationService: NotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.Reload();
    this.searchParams();
    this.getProduct();
    this.productToShow && this.getProductsImages();
    this.getContact();
    window.scrollTo(0, 0);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  addToCart(): void {
    this.cartService.addToCart(cartProductAdapter(this.productToShow));
    this.notificationService.showSuccessToast('Producto agregado al carrito');
  }

  formatPrice(price: string): string {
    if (price === 'A Consultar') return 'A Consultar';

    return this.utilsService.formatPrice(Number(price), 'ARS', 'es-AR');
  }

  formatNumber(number: number): string | number {
    if (!number) return 0;

    return this.utilsService.formatNumber(number);
  }

  private getProduct(): void {
    this.apiService.productSelected$
      .pipe(takeUntil(this.destroy$))
      .subscribe((product) => {
        this.productToShow = product as ProductCardModel;
        console.log('aaa');
        console.log(this.productToShow.anio!);
        this.clearFilters();
        this.productToShow.tipo &&
          this.filtersToApply.tipo.push(this.productToShow.tipo!);
        this.productToShow.combustible &&
          this.filtersToApply.combustible.push(this.productToShow.combustible!);
        this.productToShow.marca &&
          this.filtersToApply.marca.push(this.productToShow.marca!);
        console.log(this.isVehicle);
        this.getProductsImages();
        this.loadProducts();
        window.scrollTo(0, 0);
      });
  }

  private getProductsImages(): void {
    if (!this.isVehicle) {
      this.apiService
        .getPartImage(this.productToShow.id)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (img) => {
            console.log(img);
            this.productImages = img.data.map((i: { url: string }) => i.url);
          },
          error: (error) => {
            this.errorHandlerService.handleError(
              error,
              'Error al obtener la imagen del repuesto'
            );
          },
        });
    } else {
      let imageSubscription;
      if (this.productToShow.kilometraje === 0) {
        imageSubscription = this.apiService.getVehicleOKMImage(
          this.productToShow.id
        );
      } else {
        imageSubscription = this.apiService.getVehicleUsedImage(
          this.productToShow.id
        );
      }
      imageSubscription = imageSubscription
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (img) => {
            this.productImages = img.data.map((i: { url: string }) => i.url);
          },
          error: (error) => {
            this.errorHandlerService.handleError(
              error,
              'Error al obtener la imagen del vehículo'
            );
          },
        });
    }
  }

  private searchParams(): void {
    this.activatedRoute.params
      .pipe(takeUntil(this.destroy$))
      .subscribe((params) => {
        this.isVehicle = params['type'] === 'vehicle';
      });
  }

  private getContact(): void {
    this.apiService
      .getContactInfo('Whatsapp')
      .pipe(
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
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  private loadProducts(): void {
    if (this.isVehicle) {
      this.loadVehicleProducts();
    } else {
      this.loadPartProducts();
    }
  }

  private loadVehicleProducts(): void {
    forkJoin({
      OKM: this.apiService.getOKMVehicles(),
      used: this.apiService.getUsedVehicles(),
    })
      .pipe(
        takeUntil(this.destroy$),
        map(({ OKM, used }) => {
          const newOKM = OKM.data.map((vehicle) => ({
            ...vehicle,
            condicion: '0KM',
          }));

          const newUsed = used.data.map((vehicle) => ({
            ...vehicle,
            condicion: 'Usado',
          }));
          console.log(this.productToShow.id);
          const product = vehicleAdapter(
            [...newOKM, ...newUsed].filter(
              (p) => p.auto_id.toString() !== this.productToShow.id
            )
          );
          return product;
        })
      )
      .subscribe({
        next: (data) => {
          this.productCard = data;

          console.log(this.productCard);
        },
        error: (error) => {
          this.errorHandlerService.handleError(
            error,
            'Error al obtener vehiculos'
          );
        },
      });
  }

  private loadPartProducts(): void {
    this.apiService
      .getParts()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => {
          this.productCard = autoPartAdapter(data.data).filter(
            (p) => p.id !== this.productToShow.id
          );
        },
        error: (error) => {
          this.errorHandlerService.handleError(
            error,
            'Error al obtener los repuestos'
          );
        },
      });
  }

  private clearFilters(): void {
    this.filtersToApply = {
      anio: [],
      combustible: [],
      marca: [],
      tipo: [],
      familia: [],
      condicion: '',
      kmsMax: 158400,
      kmsMin: 0,
      priceMax: 8000000,
      priceMin: 0,
    };
  }

  private Reload(): void {
    this.router.events.pipe(takeUntil(this.destroy$)).subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log(event.url.split('/')[1].includes('detail'));
        window.location.reload();
      }
    });
  }
}
