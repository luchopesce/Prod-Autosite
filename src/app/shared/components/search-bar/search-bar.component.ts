import { Component, Input, OnInit } from '@angular/core';
import { ProductCardModel } from '../../models/product-card.model';
import { Observable, map, startWith } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { UrlBuilderService } from '../../services/url-builder.service';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
  imports: [FormsModule, MatAutocompleteModule, ReactiveFormsModule, AsyncPipe],
})
export class SearchBarComponent implements OnInit {
  @Input() products: ProductCardModel[] = [];

  control = new FormControl('');
  filteredProducts!: Observable<ProductCardModel[]>;

  constructor(
    private router: Router,
    private apiService: ApiService,
    private urlBuilderService: UrlBuilderService
  ) {}

  ngOnInit(): void {
    this.filteredProducts = this.control.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  search(): void {
    this.urlBuilderService.buildUrlWithQueryParams('products/vehicles', {
      search: this.control.value,
    });
  }

  goToDetail(product: ProductCardModel): void {
    this.apiService.selectProduct(product);
    this.router.navigate([`/detail/vehicle/${product.id}`]);
  }

  private _filter(value: string): ProductCardModel[] {
    const filterValue = this._normalizeValue(value);
    return this.products.filter((product) =>
      this._normalizeValue(product.marca!).includes(filterValue)
    );
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
}
