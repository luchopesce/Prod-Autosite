import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchBarComponent } from '../shared/components/search-bar/search-bar.component';
import { BannerComponent } from '../core/banner/banner.component';
import { CarouselComponent } from '../products/carousel/carousel.component';
import { Subject, forkJoin, map, takeUntil } from 'rxjs';
import { ApiService } from '../shared/services/api.service';
import { ProductCardModel } from '../shared/models/product-card.model';
import { vehicleAdapter } from '../shared/adapters/vehicle.adapter';
import { Router } from '@angular/router';
import { ErrorHandlerService } from '../shared/services/error.service';
import { CarouselHomeComponent } from './carousel-home/carousel-home.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SearchBarComponent,
    BannerComponent,
    CarouselComponent,
    CarouselHomeComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  cars: ProductCardModel[] = [];
  newCars: ProductCardModel[] = [];

  constructor(
    private apiService: ApiService,
    private router: Router,
    private errorHandlerService: ErrorHandlerService
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.getVehicles();
    this.getNewVehicles();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  exploreCatalog(): void {
    this.router.navigate(['/products/vehicles']);
  }

  private getVehicles(): void {
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

          return vehicleAdapter([...newOKM, ...newUsed]);
        })
      )
      .subscribe({
        next: (data) => {
          this.cars = data;
        },
        error: (error) =>
          this.errorHandlerService.handleError(
            error,
            'Error al obtener vehiculossss'
          ),
      });
  }

  private getNewVehicles(): void {
    this.apiService
      .getNewVehicles()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (vehicles) => (this.newCars = vehicleAdapter(vehicles.data)),
        error: (error) =>
          this.errorHandlerService.handleError(
            error,
            'Error al obtener vehiculos'
          ),
      });
  }
}
