import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
} from '@angular/core';
import { FiltersService } from '../../shared/services/filters.service';
import { UrlBuilderService } from '../../shared/services/url-builder.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-bar-products.component.html',
  styleUrl: './search-bar-products.component.scss',
})
export class SearchBarProductsComponent implements OnInit {
  @ViewChild('searchInput') searchInputRef!: ElementRef;
  @Input() isVehicle: boolean = false;

  @Output() searchValue = new EventEmitter<string>();

  private searchText: string = '';

  constructor(
    private filterService: FiltersService,
    private urlBuilderService: UrlBuilderService
  ) {}

  ngOnInit(): void {
    this.getText();
  }

  sendSearchText(event: any): void {
    this.searchText = event.target.value;
    this.searchValue.emit(this.searchText);
  }

  changeFilterState(): void {
    this.filterService.filterHandler(true);
  }

  private getText(): void {
    this.urlBuilderService.getQueryParamsAsObject().then((params) => {
      if (params.search) {
        this.searchInputRef.nativeElement.value = params.search;
      }
    });
  }
}
