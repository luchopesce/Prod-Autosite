import { Injectable } from '@angular/core';
import { ProductCardModel } from '../models/product-card.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { FilterSelectModel } from '../models/filterSelect.model';
import { FilterToApplyModel } from '../models/filterToApply.model';

@Injectable({
  providedIn: 'root',
})
export class FiltersService {
  private filtersToSelectSubject: BehaviorSubject<FilterSelectModel>;
  private filtersToApplySubject: BehaviorSubject<FilterToApplyModel>;
  private filterStateSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  filtersToApply$: Observable<FilterToApplyModel>;
  filtersToSelect$: Observable<FilterSelectModel>;
  filtersToSelect: FilterSelectModel = {
    anios: [],
    combustibles: [],
    marcas: [],
    tipos: [],
    familias: [],
  };
  filterState$ = this.filterStateSubject.asObservable();

  constructor() {
    this.filtersToSelectSubject = new BehaviorSubject<FilterSelectModel>(
      this.initialFilterSelect
    );
    this.filtersToSelect$ = this.filtersToSelectSubject.asObservable();

    this.filtersToApplySubject = new BehaviorSubject<FilterToApplyModel>(
      this.initialFilterToApply
    );
    this.filtersToApply$ = this.filtersToApplySubject.asObservable();
  }

  private get initialFilterSelect(): FilterSelectModel {
    return { anios: [], combustibles: [], marcas: [], tipos: [], familias: [] };
  }

  private get initialFilterToApply(): FilterToApplyModel {
    return {
      anio: [''],
      combustible: [''],
      marca: [''],
      tipo: [''],
      familia: [''],
      condicion: '',
      kmsMax: 98000,
      kmsMin: 0,
      priceMin: 0,
      priceMax: 23000000,
    };
  }

  findFilters(products: ProductCardModel[]): void {
    const anios = [...new Set(products.map((item) => item.anio!))];
    const combustibles = [
      ...new Set(products.map((item) => item.combustible!)),
    ];
    const marcas = [...new Set(products.map((item) => item.marca!))];
    const tipos = [...new Set(products.map((item) => item.tipo!))];
    const familias = [...new Set(products.map((item) => item.model!))];

    this.filtersToSelectSubject.next({
      anios,
      combustibles,
      marcas,
      tipos,
      familias,
    });
  }

  addFilters(filters: FilterToApplyModel): void {
    this.filtersToApplySubject.next(filters);
  }

  filterHandler(value: boolean): void {
    this.filterStateSubject.next(value);
  }
}
