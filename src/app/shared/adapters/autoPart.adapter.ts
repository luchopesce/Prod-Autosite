import { PartModel } from '../models/part.model';
import { ProductCardModel } from '../models/product-card.model';
import { partToRemitoAdapter } from './partToRemito.adapter';

export const autoPartAdapter = (parts: PartModel[]): ProductCardModel[] => {
  const autoPart: ProductCardModel[] = [];

  parts.forEach((part) => {
    autoPart.push({
      id: part.repuesto_id.toString(),
      estado: '',
      addToCartButton: true,
      indicator: false,
      codigo: part.codigo,
      familia: part.familia || 'pendiente',
      origen: part.origen,
      marca: part.marca,
      model: part.familia || 'pendiente',
      tittle: part.descripcion,
      modeloDescripcion: part.observaciones,
      price: part.precio_lista.toString(),
      priceNumber: part.precio_lista,
      cardStyle: 'auto-parts',
      img: '../../../assets/card-image-default.png',
      localidad: '',
      tipo: part.tipo_articulo,
      fullProduct: partToRemitoAdapter(part),
      stock: 50,
    });
  });

  return autoPart;
};
