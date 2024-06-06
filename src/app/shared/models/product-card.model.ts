import { PartRemitoModel } from './part-remito.model';

export interface ProductCardModel {
  id: string;
  tittle: string;
  estado: string;
  model: string;
  price: string;
  kilometraje?: number;
  anio?: string;

  combustible?: string;
  codigo?: string;
  origen?: string;
  familia?: string;
  marca?: string;
  tipo?: string;
  modeloDescripcion: string;
  addToCartButton: boolean;
  indicator: boolean;
  cardStyle: String;
  img: string;
  localidad: string;
  priceNumber: number;
  condicion?: string;
  fullProduct?: PartRemitoModel;
  stock?: number;
}
