import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ApiService } from '../../shared/services/api.service';
import { Subject, catchError, of, takeUntil } from 'rxjs';
import { ProductCardModel } from '../../shared/models/product-card.model';
import { ErrorHandlerService } from '../../shared/services/error.service';
import { NotificationService } from '../../shared/services/notification.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './detail-form.component.html',
  styleUrl: './detail-form.component.scss',
})
export class DetailFormComponent implements OnInit, OnDestroy {
  @Input() product!: ProductCardModel;
  @Input() isVehicle!: boolean;

  private onDestroy = new Subject<void>();

  miFormulario: FormGroup;
  email: string = '';
  isLoading = false;
  timeOptions: string[] = [];
  isSuccess = false;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private errorHandlerService: ErrorHandlerService,
    private notificationService: NotificationService
  ) {
    this.miFormulario = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      time: '',
    });
  }

  ngOnInit(): void {
    this.getEmail();
    this.timeOptions = Array.from({ length: 8 }, (_, i) => `${10 + i}:00`);
  }

  ngOnDestroy(): void {
    this.onDestroy.next();
    this.onDestroy.complete();
  }

  saveData(): void {
    const { name, email, phone, time } = this.miFormulario.value;
    const asunto = `${this.isVehicle ? 'ID del Vehículo' : 'ID del Repuesto'} ${
      this.product.id
    } / ${email}/ ${phone} `;
    const consulta = `Hola, soy ${name}, estoy buscando información sobre ${
      this.isVehicle ? 'el vehículo' : 'el repuesto'
    } marca ${this.product.marca}, modelo ${this.product.model} con el ID ${
      this.product.id
    }. por favor envíame un correo a ${email} o un mensaje al número de teléfono ${phone} en el horario ${time}.`;

    this.isLoading = true;
    this.apiService
      .sendContactForm({ mail: this.email, asunto, consulta })
      .pipe(
        catchError((error) => {
          this.errorHandlerService.handleError(
            error,
            'Error al enviar formulario'
          );
          return of(null);
        })
      )
      .subscribe({
        error: (error) =>
          this.errorHandlerService.handleError(
            error,
            'Error al enviar formulario'
          ),
        complete: () => (
          (this.isLoading = false),
          (this.isSuccess = true),
          setTimeout(() => this.resetForm(), 2000),
          this.notificationService.showSuccessToast('Formulario enviado')
        ),
      });
  }

  private getEmail(): void {
    this.apiService
      .getContactInfo('Email')
      .pipe(takeUntil(this.onDestroy))
      .subscribe({
        next: (data) => {
          if (data.length > 0 && data[0].Valor) {
            this.email = data[0].Valor;
          } else {
            this.errorHandlerService.handleError(
              'Error al obtener información de correo',
              'Error al obtener información de correo'
            );
          }
        },
        error: (error) =>
          this.errorHandlerService.handleError(
            error,
            'Error al obtener información de correo'
          ),
      });
  }

  private resetForm(): void {
    this.miFormulario.reset({
      name: '',
      email: '',
      phone: '',
      time: '',
    });
    this.isSuccess = false;
  }
}
