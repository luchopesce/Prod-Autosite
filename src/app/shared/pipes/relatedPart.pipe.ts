import { Pipe, PipeTransform } from '@angular/core';
import { FilterToApplyModel } from '../models/filterToApply.model';
import { ProductCardModel } from '../models/product-card.model';

@Pipe({
  name: 'relatedPartFilter',
  standalone: true,
})
export class RelatedPartFilterPipe implements PipeTransform {
  transform(
    items: ProductCardModel[],
    filters: FilterToApplyModel
  ): ProductCardModel[] {
    const maxItems = 10;
    if (!items || !filters) {
      return items;
    }
    console.log(filters);
    const filteredItems = items.filter(
      (item) =>
        filters.marca.includes(item.marca!) ||
        filters.tipo.includes(item.tipo!) ||
        filters.familia.includes(item.familia!)
    );
    if (filteredItems.length > maxItems) {
      return filteredItems.slice(0, maxItems);
    }
    return filteredItems;
  }
}
