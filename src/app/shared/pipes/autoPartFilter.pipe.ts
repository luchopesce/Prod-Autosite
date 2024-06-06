import { Pipe, PipeTransform } from '@angular/core';
import { FilterToApplyModel } from '../models/filterToApply.model';
import { ProductCardModel } from '../models/product-card.model';

@Pipe({
  name: 'autoPartFilter',
  standalone: true,
})
export class AutoPartFilterPipe implements PipeTransform {
  transform(
    items: ProductCardModel[],
    filters: FilterToApplyModel
  ): ProductCardModel[] {
    if (!items || !filters) {
      return items;
    }
    console.log(filters);
    const filteredItems = items.filter(
      (item) =>
        (filters.marca.length === 0 || filters.marca.includes(item.marca!)) &&
        (filters.tipo.length === 0 || filters.tipo.includes(item.tipo!)) &&
        (filters.familia.length === 0 ||
          filters.familia.includes(item.familia!))
    );
    console.log(filteredItems);
    return filteredItems;
  }
}
