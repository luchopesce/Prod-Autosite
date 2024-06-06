import { Pipe, PipeTransform } from '@angular/core';
import { FilterToApplyModel } from '../models/filterToApply.model';
import { ProductCardModel } from '../models/product-card.model';

@Pipe({
  name: 'relatedCarFilter',
  standalone: true,
})
export class RelatedCarFilterPipe implements PipeTransform {
  transform(
    items: ProductCardModel[],
    filters: FilterToApplyModel
  ): ProductCardModel[] {
    const maxItems = 10;
    if (!items || !filters) {
      return items;
    }
    console.log(filters);

    const filteredItems = items.filter((item) => {
      const otherFiltersPassed =
        filters.anio.includes(item.anio!) ||
        filters.combustible.includes(item.combustible!) ||
        filters.marca.includes(item.marca!);

      return otherFiltersPassed;
    });
    if (filteredItems.length > maxItems) {
      return filteredItems.slice(0, maxItems);
    }
    console.log(filteredItems);
    return filteredItems;
  }
}
