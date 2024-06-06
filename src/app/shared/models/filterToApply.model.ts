export interface FilterToApplyModel {
  anio: string[];
  combustible: string[];
  marca: string[];
  tipo: string[];
  familia: string[];
  kmsMin: number;
  kmsMax?: number;
  condicion: string;
  priceMin: number;
  priceMax: number;
}
