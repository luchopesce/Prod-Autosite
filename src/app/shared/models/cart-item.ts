import { ProductCardModel } from './product-card.model';

export interface CartItem {
  product: ProductCardModel;
  quantity: number;
}
