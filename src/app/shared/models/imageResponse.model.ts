export interface ImageCarResponse {
  data: Datum[];
}

export interface Datum {
  descripcion: string;
  fecha: string;
  tipo: string;
  endpoint: string;
  docuModulo: string;
  id: number;
  portada: number;
  referencia: string;
  url: string;
}
