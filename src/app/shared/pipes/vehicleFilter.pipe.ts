import { Pipe, PipeTransform } from '@angular/core';
import { FilterToApplyModel } from '../models/filterToApply.model';
import { ProductCardModel } from '../models/product-card.model';

@Pipe({
  name: 'vehicleFilter',
  standalone: true,
})
export class VehicleFilterPipe implements PipeTransform {
  transform(
    items: ProductCardModel[],
    filters: FilterToApplyModel
  ): ProductCardModel[] {
    if (!items || !filters) {
      return items;
    }
    console.log(filters);

    return items.filter((item) => {
      const kmsInRange =
        item.kilometraje !== undefined &&
        filters.kmsMin !== undefined &&
        filters.kmsMax !== undefined &&
        Number(item.kilometraje) >= Number(filters.kmsMin) &&
        Number(item.kilometraje) <= Number(filters.kmsMax);

      const priceInRange =
        item.priceNumber !== undefined &&
        filters.priceMin !== undefined &&
        filters.priceMax !== undefined &&
        item.priceNumber >= filters.priceMin &&
        item.priceNumber <= filters.priceMax;

      const otherFiltersPassed =
        (filters.anio.length === 0 || filters.anio.includes(item.anio!)) &&
        (filters.combustible.length === 0 ||
          filters.combustible.includes(item.combustible!)) &&
        (filters.marca.length === 0 || filters.marca.includes(item.marca!)) &&
        (filters.condicion === '' || item.condicion === filters.condicion);

      return kmsInRange && otherFiltersPassed && priceInRange;
    });
  }
}
