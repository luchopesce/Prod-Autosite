import { FilterSelectModel } from './../../shared/models/filterSelect.model';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FiltersService } from '../../shared/services/filters.service';
import { Subject, Subscription, forkJoin } from 'rxjs';
import { CommonModule } from '@angular/common';
import { UrlBuilderService } from '../../shared/services/url-builder.service';
import { ProductCardModel } from '../../shared/models/product-card.model';
import { VehicleInfoService } from '../../shared/services/vehicles-info-servicie.service';
import { UtilsService } from '../../shared/services/utils.service';

interface FilterToShowType {
  [key: string]: string[];
}
@Component({
  selector: 'app-product-filters',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSliderModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './product-filters.component.html',
  styleUrl: './product-filters.component.scss',
})
export class ProductFiltersComponent implements OnInit, OnDestroy {
  @Input() isVehicle: boolean = false;
  @Input() productsFiltered!: ProductCardModel[];

  private filtersSubscription!: Subscription;
  private formChangesSubscription!: Subscription;
  private filterSateSubscription!: Subscription;

  miFormulario: FormGroup;
  filters: FilterSelectModel = {
    anios: [],
    combustibles: [],
    marcas: [],
    familias: [],
    tipos: [],
  };
  minKmsToSelect = 0;
  minPriceToSelect = 0;
  maxKmsToSelect: number = 0;
  maxPriceToSelect: number = 0;

  condicion: string = '';
  isOpen: boolean = false;
  filterToShow: FilterToShowType = {
    marcas: [],
    anios: [],
    combustibles: [],
    tipos: [],
    familias: [],
  };

  constructor(
    private fb: FormBuilder,
    private filtersService: FiltersService,
    private urlBuilderService: UrlBuilderService,
    private vehicleInfoService: VehicleInfoService,
    private utilsService: UtilsService
  ) {
    this.miFormulario = this.fb.group({
      marca: this.fb.array([]),
      anio: this.fb.array([]),
      combustible: this.fb.array([]),
      tipo: this.fb.array([]),
      familia: this.fb.array([]),
      kmsMin: 0,
      kmsMax: 0,
      priceMin: 0,
      priceMax: 0,
    });
  }

  ngOnInit(): void {
    this.initializeMaxValues();
    this.setFilters();
    this.findFilterState();
    this.saveFormChanges();
    this.showFilters();
    this.getUrlParams();
  }

  ngOnDestroy(): void {
    this.filterSateSubscription && this.filtersSubscription.unsubscribe();
    this.formChangesSubscription && this.filtersSubscription.unsubscribe();
    this.filterSateSubscription && this.filtersSubscription.unsubscribe();
  }

  getFilterToShowKeys(): string[] {
    return Object.keys(this.filterToShow);
  }

  saveData(): void {
    const url = this.isVehicle ? 'products/vehicles' : 'products/auto-parts';
    console.log(this.miFormulario.value);
    this.filtersService.addFilters({
      ...this.miFormulario.value,
      condicion: this.condicion,
    });

    this.urlBuilderService.buildUrlWithQueryParams(url, {
      ...this.miFormulario.value,
      condicion: this.condicion,
    });

    this.filtersService.filterHandler(false);
  }

  closeFilters(): void {
    this.filtersService.filterHandler(false);
  }

  resetForm(): void {
    console.log(this.filterToShow);

    this.clearFormArrays();

    this.miFormulario.reset({
      marca: [],
      anio: [],
      combustible: [],
      tipo: [],
      familia: [],
      kmsMin: 0,
      kmsMax: this.maxKmsToSelect,
      priceMin: 0,
      priceMax: this.maxPriceToSelect,
    });
    console.log(this.miFormulario.value);
    this.condicion = '';
    this.resetSelectElements();
    this.saveData();
    this.filtersService.filterHandler(false);
    this.urlBuilderService.clearUrlQueryParams();
  }

  setCondicion(val: string): void {
    this.condicion = val;
    if (!this.isOpen) this.saveData();
  }

  removeValueFromFormArray(controlName: string, value: string): void {
    const control = this.miFormulario.get(controlName) as FormArray;
    const index = control.value.indexOf(value);
    if (index !== -1) {
      control.removeAt(index);
    }
  }

  addValueToFormArray(controlName: string, event: Event): void {
    const control = this.miFormulario.get(controlName) as FormArray;
    const selectedValue = (event.target as HTMLSelectElement).value;
    if (selectedValue === '') {
      control.clear();
      return;
    }
    if (!control.value.includes(selectedValue)) {
      control.push(new FormControl(selectedValue));
    }
  }

  formatNumber(number: string): string {
    return this.utilsService
      .formatPrice(Number(number), 'ARS', 'es-AR')
      .split('$')[1]
      .split(',')[0];
  }

  private setFilters(): void {
    this.filtersSubscription = this.filtersService.filtersToSelect$.subscribe(
      (filters) => {
        this.filters = filters;
      }
    );
  }

  private saveFormChanges(): void {
    this.formChangesSubscription = this.miFormulario.valueChanges.subscribe(
      () => {
        if (!this.isOpen) {
          this.saveData();
        }
      }
    );
  }

  private findFilterState(): void {
    this.filterSateSubscription = this.filtersService.filterState$.subscribe(
      (filterState) => {
        this.isOpen = filterState;
      }
    );
  }

  private showFilters(): void {
    this.formChangesSubscription = this.miFormulario.valueChanges.subscribe(
      () => {
        this.filterToShow = {
          marcas: [],
          anios: [],
          combustibles: [],
          tipos: [],
          familias: [],
        };
        const formControls = this.miFormulario.value;
        for (const value in formControls) {
          if (
            typeof formControls[value] !== 'number' &&
            formControls[value].length > 0
          ) {
            console.log(formControls);
            const formatFilers: FilterToShowType = Object.fromEntries(
              Object.entries(formControls)
                .filter(([key, value]) => Array.isArray(value))
                .map(([key, value]) => [key, (value as string[]) || []])
            );
            this.filterToShow = formatFilers;
            console.log(this.filterToShow);
          }
        }
      }
    );
  }

  private getUrlParams(): void {
    this.urlBuilderService.getQueryParamsAsObject().then((params) => {
      if (!params.search) {
        Object.keys(params).forEach((key) => {
          const control = this.miFormulario.get(key);
          if (control instanceof FormArray) {
            control.clear();
            if (Array.isArray(params[key])) {
              (params[key] as string[]).forEach((value) => {
                control.push(new FormControl(value));
              });
            } else if (typeof params[key] === 'string') {
              control.push(new FormControl(params[key]));
            }
          } else {
            if (control) {
              control.setValue(params[key]);
            }
          }
        });

        this.miFormulario.patchValue({
          kmsMin: Number(params.kmsMin) || this.minKmsToSelect,
          kmsMax: Number(params.kmsMax) || this.maxKmsToSelect,
          priceMin: Number(params.priceMin) || this.minPriceToSelect,
          priceMax: Number(params.priceMax) || this.maxPriceToSelect,
        });

        this.condicion = params.condicion || '';
        if (params.condicion === '0KM' || params.condicion === 'Usado') {
          this.saveData();
        }
      }
    });
  }

  private initializeMaxValues(): void {
    forkJoin({
      maxPrice: this.vehicleInfoService.getMaxPrice(),
      maxKms: this.vehicleInfoService.getMaxKms(),
    }).subscribe(({ maxPrice, maxKms }) => {
      this.maxPriceToSelect = maxPrice;
      this.maxKmsToSelect = maxKms;

      this.miFormulario.patchValue({
        ...this.miFormulario.value,
        kmsMax: this.maxKmsToSelect,
        priceMax: this.maxPriceToSelect,
      });
    });
  }

  private clearFormArrays(): void {
    const formArrayNames = ['marca', 'anio', 'combustible', 'tipo', 'familia'];
    formArrayNames.forEach((name) => {
      (this.miFormulario.get(name) as FormArray).clear();
    });
  }

  private resetSelectElements() {
    const selectElements = document.querySelectorAll('select');
    selectElements.forEach((select) => {
      select.value = '';
    });
  }
}
