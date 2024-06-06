import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import {
  BodyNew,
  BodyOKM,
  BodyUsed,
  bodyRemito,
  environment,
  registerBody,
} from '../../../environments/environment';
import { CarModel } from '../models/car.model';
import { PartModel } from '../models/part.model';
import { ProductCardModel } from '../models/product-card.model';
import { ClienteModel } from '../models/client.model';
import { UtilsService } from './utils.service';
import { PartRemitoModel } from '../models/part-remito.model';
export interface ContactInfoItem {
  ParamID: number;
  Valor: string;
  Sistema: string;
  Comentario: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = environment.apiUrl;
  private bodyOKM = BodyOKM;
  private bodyUsed = BodyUsed;
  private bodyNew = BodyNew;
  private bodyRemito = bodyRemito;
  private bodyRegister = registerBody;
  private productSelectedSubject: BehaviorSubject<ProductCardModel | {}> =
    new BehaviorSubject<ProductCardModel | {}>({});

  constructor(private http: HttpClient, private utilsService: UtilsService) {
    const storedItems = localStorage.getItem('selectProduct');
    if (storedItems) {
      this.productSelectedStorage = JSON.parse(storedItems);
      this.productSelectedSubject.next(this.productSelectedStorage);
    }
  }

  productSelected$ = this.productSelectedSubject.asObservable().pipe(
    tap((items) => {
      localStorage.setItem('selectProduct', JSON.stringify(items));
    })
  );
  productSelectedStorage!: ProductCardModel;

  get<T>(endpoint: string, params?: any): Observable<T> {
    const url = `${this.baseUrl}${endpoint}`;
    return this.http.get<T>(url, { params });
  }

  post<T>(endpoint: string, body?: any): Observable<T> {
    const url = `${this.baseUrl}${endpoint}`;
    return this.http.post<T>(url, body);
  }

  getOKMVehicles(params?: any): Observable<{ data: CarModel[] }> {
    const endpoint =
      'api/dispatcher/executeDispatcher/ventas_unidades_administrarSelect';

    return this.post(endpoint, this.bodyOKM);
  }

  getUsedVehicles(params?: any): Observable<{ data: CarModel[] }> {
    const endpoint =
      'api/dispatcher/executeDispatcher/ventas_unidades_administrarSelect';

    return this.post(endpoint, this.bodyUsed);
  }

  getNewVehicles(params?: any): Observable<{ data: CarModel[] }> {
    const endpoint =
      'api/dispatcher/executeDispatcher/ventas_unidades_administrarSelect';

    return this.post(endpoint, this.bodyNew);
  }

  getVehicleOKMImage(vehicleId: string): Observable<any> {
    const endpoint = 'api/dispatcher/executeDispatcher/genericSelect';
    const body = {
      sqlName: 'app/comun/documentosSelect',
      referencia: vehicleId,
      docuModulo: 'ventas',
    };
    return this.post(endpoint, body);
  }

  getVehicleUsedImage(vehicleId: string): Observable<any> {
    const endpoint = 'api/dispatcher/executeDispatcher/genericSelect';
    const body = {
      sqlName: 'app/comun/documentosSelect',
      referencia: vehicleId,
      docuModulo: 'ventas',
    };
    return this.post(endpoint, body);
  }

  selectProduct(product: ProductCardModel): void {
    this.productSelectedSubject.next(product);
  }

  getParts(params?: any): Observable<{ data: PartModel[] }> {
    const endpoint = 'api/dispatcher/executeDispatcher/genericSelect';
    const body = {
      sqlName: 'postVentas/repuesto_select',
      codigo: '%%',
      descripcion: '%%',
      PublicadoMercadoLibre: false,
      chkMarca: false,
      ...params,
    };
    return this.post(endpoint, body);
  }

  getPartImage(repuesto_id: string): Observable<any> {
    const endpoint = 'api/dispatcher/executeDispatcher/genericSelect';
    const body = {
      sqlName: 'app/comun/documentosSelect',
      referencia: repuesto_id,
      docuModulo: 'postventa',
    };
    return this.post(endpoint, body);
  }

  getContactInfo(value: string): Observable<any> {
    const endpoint = 'api/dispatcher/executeDispatcher/genericSelect';
    const body = {
      sqlName: 'app/comun/datos_empresa',
    };

    return this.post(endpoint, body).pipe(
      map((response: any) =>
        (response as { data: ContactInfoItem[] }).data.filter(
          (item) => item.Comentario === value
        )
      )
    );
  }

  sendContactForm(newBody: {
    mail: string;
    consulta: string;
    asunto: string;
  }): Observable<any> {
    const endpoint = 'api/dispatcher/executeDispatcher/sendMailNew';
    const body = {
      mail: newBody.mail,
      consulta: newBody.consulta,
      asunto: newBody.asunto,
    };

    return this.post(endpoint, body);
  }

  registerClient(client: ClienteModel): Observable<any> {
    const { phone, name, dni, email, cuit } = client;
    const endpoint = 'api/dispatcher/executeDispatcher/clienteInsert';
    const body = {
      ...this.bodyRegister,
      nombreCompleto: name,
      telefono: phone,
      dni,
      cuit,
      email,
      emailAlternativo: email,
      emailLaboral: email,
      codigo: dni || cuit,
    };

    return this.post(endpoint, body);
  }

  sendRemito(
    parts: PartRemitoModel[],
    dni: string,
    cuit: string,
    total: string,
    cantidad: number
  ): Observable<any> {
    const fechaFormateada = this.utilsService.formatDate(
      new Date(),
      'DD/MM/YYYY'
    );
    const gravado = Number(total) * 1.21;
    const importeIva = Number(total) - gravado;
    const endpoint = 'api/dispatcher/executeDispatcher/pedidoVentaInsert';
    const body = {
      ...this.bodyRemito,
      referencia: dni || cuit,
      fecha: fechaFormateada,
      repuestosArr: parts,
      gravado: gravado.toString(),
      importeIva: importeIva.toString(),
      total,
      _cantidad: cantidad,
    };

    return this.post(endpoint, body);
  }
}
