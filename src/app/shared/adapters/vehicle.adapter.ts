import { CarModel } from '../models/car.model';

import { ProductCardModel } from '../models/product-card.model';

export const vehicleAdapter = (cars: CarModel[]): ProductCardModel[] => {
  const vehicle: ProductCardModel[] = [];
  const currentYear = new Date().getFullYear().toString();
  cars.forEach((car) => {
    const kms = car.kms || 0;

    const price = car.precioDeVenta?.toString() || 'A Consultar';

    vehicle.push({
      id: car.auto_id.toString(),
      estado: car.estado,
      addToCartButton: false,
      indicator: true,
      marca: car.marca,
      kilometraje: kms,
      anio: car.anio.toString() || currentYear.toString(),
      combustible: car.combustible || 'X',
      model: car.modelo,
      tittle: car.marca,
      modeloDescripcion: car.modelo_descripcion,
      price: price,
      priceNumber: car.precioDeVenta || 0,
      cardStyle: 'vehicle',
      localidad: car.localidad,
      img: '../../../assets/card-image-default.png',
      tipo: 'Autos',
      condicion: car.condicion,
    });
  });
  return vehicle;
};
