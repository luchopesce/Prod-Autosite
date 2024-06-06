import { Component, Input, SimpleChanges } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { ProductCardModel } from '../../shared/models/product-card.model';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [SlickCarouselModule, CommonModule, CardComponent],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  @Input() slides: ProductCardModel[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['slides'] && changes['slides'].currentValue.length > 0) {
      console.log(changes['slides'].currentValue);
      this.slides = changes['slides'].currentValue;
      console.log(this.slides);
    }
  }

  slideConfig = {
    slidesToShow: 4,
    slideToScroll: 4,
    autoPlay: true,
    autoPlaySpeed: 5000,
    infinite: true,
    arrows: true,
    variableWidth: true,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: true,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          variableWidth: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
        },
      },
    ],
  };
}
