import { Injectable } from '@angular/core';
import { ProductCardModel } from '../models/product-card.model';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  // formatear una fecha en un formato específico
  formatDate(date: Date, format: string): string {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    format = format.replace('DD', this.padZero(day));
    format = format.replace('MM', this.padZero(month));
    format = format.replace('YYYY', year.toString());

    return format;
  }

  // agregar un cero a la izquierda si el número es menor que 10
  private padZero(value: number): string {
    return value < 10 ? '0' + value : value.toString();
  }

  // generar un ID único
  generateUniqueId(): string {
    return Math.random().toString(36).substring(7);
  }

  // convertir un objeto a un formato de consulta de URL
  objectToQueryString(obj: any): string {
    const params = new URLSearchParams();
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        params.set(key, obj[key]);
      }
    }
    return params.toString();
  }

  // verificar si un valor es un número
  isNumber(value: any): boolean {
    return !isNaN(parseFloat(value)) && isFinite(value);
  }

  // verificar si un valor es una cadena de texto
  isString(value: any): boolean {
    return typeof value === 'string';
  }

  // verificar si un valor es un objeto
  isObject(value: any): boolean {
    return typeof value === 'object' && value !== null;
  }

  // clonar un objeto de manera profunda
  deepClone(obj: any): any {
    return JSON.parse(JSON.stringify(obj));
  }

  formatPrice(price: number, currency: string, locale: string): string {
    return price.toLocaleString(locale, {
      style: 'currency',
      currency: currency,
    });
  }
  formatWhatsAppNumber(value: string): string {
    return value.replace(/\+/g, '').replace(/\s/g, '');
  }

  formatNumber(number: number): string {
    return this.formatPrice(number, 'ARS', 'es-AR').split('$')[1].split(',')[0];
  }
}
