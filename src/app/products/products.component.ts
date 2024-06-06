import { ProductCardModel } from './../shared/models/product-card.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../shared/services/api.service';
import { CardComponent } from './card/card.component';
import { Subject, forkJoin, map, takeUntil } from 'rxjs';
import { autoPartAdapter } from '../shared/adapters/autoPart.adapter';
import { vehicleAdapter } from '../shared/adapters/vehicle.adapter';
import { ProductBannerComponent } from './product-banner/product-banner.component';
import { ProductFiltersComponent } from './product-filters/product-filters.component';
import { FiltersService } from '../shared/services/filters.service';
import { FilterToApplyModel } from '../shared/models/filterToApply.model';
import { VehicleFilterPipe } from '../shared/pipes/vehicleFilter.pipe';
import { AutoPartFilterPipe } from '../shared/pipes/autoPartFilter.pipe';
import { FilterPipe } from '../shared/pipes/filter.pipe';
import { CommonModule } from '@angular/common';
import { SearchBarProductsComponent } from './search-bar-products/search-bar-products.component';
import { UrlBuilderService } from '../shared/services/url-builder.service';
import { ErrorHandlerService } from '../shared/services/error.service';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',

  imports: [
    CardComponent,
    ProductBannerComponent,
    ProductFiltersComponent,
    VehicleFilterPipe,
    AutoPartFilterPipe,
    FilterPipe,
    CommonModule,
    SearchBarProductsComponent,
  ],
})
export class ProductsComponent implements OnInit {
  private destroy$ = new Subject<void>();

  isVehicle: boolean = false;
  productCard: ProductCardModel[] = [];
  filtersToApply: FilterToApplyModel = {
    anio: [''],
    combustible: [''],
    marca: [''],
    tipo: [''],
    familia: [''],
    condicion: '',
    kmsMax: 0,
    kmsMin: 0,
    priceMax: 0,
    priceMin: 0,
  };
  searchText: string = '';
  filterState!: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService,
    private filterService: FiltersService,
    private urlBuilderService: UrlBuilderService,
    private errorHandlerService: ErrorHandlerService
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.getUrlParams();
    this.searchParams();
    this.getFilters();
    this.findFilterState();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSearch(event: any): void {
    this.searchText = event;
  }

  private searchParams(): void {
    this.activatedRoute.url
      .pipe(takeUntil(this.destroy$))
      .subscribe((params) => {
        this.isVehicle = params[1].path === 'vehicles';

        this.loadProducts();
      });
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

          this.filterService.findFilters(
            vehicleAdapter([...newOKM, ...newUsed])
          );
          return vehicleAdapter([...newOKM, ...newUsed]);
        })
      )
      .subscribe({
        next: (data) => {
          this.productCard = data;
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
          this.filterService.findFilters(autoPartAdapter(data.data));
          this.productCard = autoPartAdapter(data.data);
        },
        error: (error) => {
          this.errorHandlerService.handleError(
            error,
            'Error al obtener los repuestos'
          );
        },
      });
  }

  private getFilters(): void {
    this.filterService.filtersToApply$
      .pipe(takeUntil(this.destroy$))
      .subscribe((filters) => (this.filtersToApply = filters));
  }

  private findFilterState(): void {
    this.filterService.filterState$.pipe(takeUntil(this.destroy$)).subscribe({
      next: (value) => {
        this.filterState = value;
      },
      error: (error) =>
        this.errorHandlerService.handleError(
          error,
          'Error al obtener los filtros'
        ),
    });
  }

  private getUrlParams(): void {
    this.urlBuilderService.getQueryParamsAsObject().then((params) => {
      if (params.search) {
        this.searchText = params.search;
      }
    });
  }
}
