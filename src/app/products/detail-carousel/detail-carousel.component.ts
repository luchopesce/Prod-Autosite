import { Component, Input, SimpleChanges } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-detail-carousel',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './detail-carousel.component.html',
  styleUrl: './detail-carousel.component.scss',
})
export class DetailCarouselComponent {
  @Input() images: string[] = [];

  imageToShow: string = '';
  imageNumber: number = 0;
  controlDisabled = true;

  setImage(image: string, index: number): void {
    this.imageToShow = image;
    this.imageNumber = Number(index);
  }

  nextImage(): void {
    if (this.imageNumber < this.images.length - 1) {
      this.imageNumber++;
      this.imageToShow = this.images[this.imageNumber];
    }
  }

  prevImage(): void {
    if (this.imageNumber > 0) {
      this.imageNumber--;
      this.imageToShow = this.images[this.imageNumber];
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['images'] && changes['images'].currentValue.length > 0) {
      this.imageToShow = this.images[0];
      this.imageNumber = 0;
      this.controlDisabled = false;
    } else {
      this.imageToShow = '../../../assets/card-image-default.png';
    }
  }
}
