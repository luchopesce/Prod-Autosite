import { PartRemitoModel } from '../models/part-remito.model';
import { PartModel } from '../models/part.model';

export const partToRemitoAdapter = (parts: PartModel): PartRemitoModel => {
  return {
    descripcion: parts.descripcion,
    precio_oferta: parts.precio_oferta,
    precio_costo_anterior: parts.ultimo_costo,
    codigo: parts.codigo,
    costo_campana: parts.costo_campania,
    ultimo_precio_venta: 0,
    descuento: parts.descuento!,
    tasa_iva_id: parts.tasa_iva_id,
    deposito: 'CENTRAL',
    costo_oferta: parts.costo_oferta,
    origen: parts.origen!,
    precio_sin_iva: parts.precio_lista,
    tipo_repuesto: parts.tipo_articulo,
    cotizacion: 1,
    tasa_iva: 21,
    descuento_porcentaje: parts.descuento_porcentaje!,
    moneda: parts.moneda,
    ultimo_precio_costo: parts.ultimo_costo,
    respuesto_id: parts.repuesto_id,
    stock: 0,
    precio_campana: parts.precio_oferta,
    isConsultar: true,
    ubicacion: '',
    costo: parts.ultimo_costo,
    repuesto: parts.codigo,
    descuento_cliente: 0,
    cantidad: 1,
    depositoCodigo: 'CENTRAL',
    precio_unitario: parts.precio_lista,
    precio_unitario_descuento: parts.precio_lista,
    subtotal: parts.precio_lista,
    subtotal_descuento: parts.precio_lista,
  };
};
