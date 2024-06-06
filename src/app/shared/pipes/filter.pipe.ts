import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true,
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string, fieldNames: string[]): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    console.log(fieldNames);
    console.log(searchText);

    searchText = searchText.toLowerCase();
    const filteredItems = items.filter((item) => {
      return fieldNames.some((fieldName) => {
        if (item && item[fieldName]) {
          return item[fieldName].toLowerCase().includes(searchText);
        }
        return false;
      });
    });
    console.log(filteredItems);
    return filteredItems;
  }
}
