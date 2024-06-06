import { CartItem } from '../models/cart-item';
import { ProductCardModel } from '../models/product-card.model';

export const cartProductAdapter = (product: ProductCardModel): CartItem => {
  return {
    product: product,
    quantity: 1,
  };
};
