import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-product-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-banner.component.html',
  styleUrl: './product-banner.component.scss',
})
export class ProductBannerComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();

  isVehicle: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.changeImage();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private changeImage(): void {
    this.isVehicle = this.router.url.split('/')[2].includes('vehicles');

    this.router.events.pipe(takeUntil(this.destroy$)).subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isVehicle = event.url.split('/')[2].includes('vehicles');
      }
    });
  }
}
