import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-carousel-home',
  standalone: true,
  imports: [SlickCarouselModule, CommonModule],
  templateUrl: './carousel-home.component.html',
  styleUrl: './carousel-home.component.scss',
})
export class CarouselHomeComponent {
  constructor(private router: Router) {}

  slides = [
    {
      img: '../../../assets/portrait.png',
      tittle: 'Tu próximo auto, cada vez más cerca',
      text: 'En AutoSite te subís a tu próximo usado, como si fuese un cero. Estamos en cada detalle, para que compres tu auto con el respaldo y la seguridad que buscás.',
    },
    {
      img: '../../../assets/slide-1.jpg',
      tittle: 'Conocé los mejores planes para llegar a tu 0km',
      text: 'En AutoSite tenemos distintas opciones para cada usuario. Entrá, buscá el auto que prefieras y contactate de manera directa con nosotros.',
    },
    {
      img: '../../../assets/slide-2.png',
      tittle: 'Animate a sumarle kilómetros',
      text: '¡Te aseguramos la mejor experiencia!',
    },
  ];

  slideConfig = {
    slidesToShow: 1,
    slideToScroll: 3,
    autoplay: true,
    autoPlaySpeed: 5000,
    infinite: true,
    arrows: false,
  };

  goToExplore(): void {
    this.router.navigate(['/products/vehicles']);
  }
}
