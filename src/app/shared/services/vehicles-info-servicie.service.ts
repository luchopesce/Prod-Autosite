import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, forkJoin, map } from 'rxjs';
import { ApiService } from './api.service';
import { vehicleAdapter } from '../adapters/vehicle.adapter';

@Injectable({
  providedIn: 'root',
})
export class VehicleInfoService {
  private maxPrice$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private maxKms$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(private apiService: ApiService) {}

  getMaxPrice(): Observable<number> {
    return forkJoin([
      this.apiService.getOKMVehicles(),
      this.apiService.getUsedVehicles(),
    ]).pipe(
      map(([okmVehicles, usedVehicles]) => {
        const allVehicles = [...okmVehicles.data, ...usedVehicles.data];
        const maxPrice = vehicleAdapter(allVehicles).reduce(
          (maxPrice, vehicle) => Math.max(maxPrice, vehicle.priceNumber),
          0
        );
        this.maxPrice$.next(maxPrice);
        return maxPrice;
      })
    );
  }
  getMaxKms(): Observable<number> {
    return forkJoin([
      this.apiService.getOKMVehicles(),
      this.apiService.getUsedVehicles(),
    ]).pipe(
      map(([okmVehicles, usedVehicles]) => {
        const allVehicles = [...okmVehicles.data, ...usedVehicles.data];
        const maxKms = vehicleAdapter(allVehicles).reduce(
          (maxKms, vehicle) => Math.max(maxKms, vehicle.kilometraje!),
          0
        );

        this.maxKms$.next(maxKms);
        return maxKms;
      })
    );
  }
  getUpdatedMaxPrice(): Observable<number> {
    return this.maxPrice$.asObservable();
  }

  getUpdatedMaxKms(): Observable<number> {
    return this.maxKms$.asObservable();
  }
}
