import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CartService } from '../../shared/services/cart.service';
import { Subject, catchError, finalize, map, of, takeUntil, tap } from 'rxjs';
import { ApiService } from '../../shared/services/api.service';
import { ClienteModel } from '../../shared/models/client.model';
import Swal from 'sweetalert2';
import { ErrorHandlerService } from '../../shared/services/error.service';
import { RecaptchaModule } from 'ng-recaptcha';
import { Router } from '@angular/router';
import { PartRemitoModel } from '../../shared/models/part-remito.model';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    CommonModule,
    RecaptchaModule,
  ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  parts!: PartRemitoModel[];
  miFormulario: FormGroup;
  checkoutStatus!: boolean;
  isLoading!: boolean;
  captchaResolved = false;

  constructor(
    private fb: FormBuilder,
    private cartService: CartService,
    private apiService: ApiService,
    private errorHandlerService: ErrorHandlerService,
    private router: Router
  ) {
    this.miFormulario = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      'dni-cuit': [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(11),
          Validators.pattern('^[0-9]+$'),
        ],
      ],
      captcha: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.CheckoutHandler();
    this.cartHandler();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeCheckoutState(): void {
    this.cartService.checkoutHandler();
  }

  resolved(captchaResponse: string): void {
    this.miFormulario.controls['captcha'].setValue(captchaResponse);
    this.captchaResolved = true;
  }

  saveData(): void {
    this.isLoading = true;
    const client: ClienteModel = {
      name: this.miFormulario.get('name')?.value,
      email: this.miFormulario.get('email')?.value,
      phone: this.miFormulario.get('phone')?.value,
      dni:
        this.miFormulario.get('dni-cuit')?.value &&
        this.miFormulario.get('dni-cuit')?.value.length <= 8
          ? this.miFormulario.get('dni-cuit')?.value
          : '',
      cuit:
        this.miFormulario.get('dni-cuit')?.value &&
        this.miFormulario.get('dni-cuit')?.value.length > 8
          ? this.miFormulario.get('dni-cuit')?.value
          : '',
    };
    this.registerClient(client);
  }

  private CheckoutHandler(): void {
    this.cartService.checkoutState$
      .pipe(takeUntil(this.destroy$))
      .subscribe((checkoutState) => {
        this.checkoutStatus = checkoutState;
      });
  }

  private registerClient(client: ClienteModel): void {
    this.apiService
      .registerClient(client)
      .pipe(
        tap((response) => {
          const cantidad = this.parts.reduce(
            (acc, item) => acc + item.cantidad,
            0
          );
          console.log(cantidad);
          const total = this.cartService.getCartTotal().toString();
          this.sendRemito(
            this.parts,
            client.dni!,
            client.cuit!,
            client.email!,
            cantidad,
            total
          );
        }),
        catchError((error) => {
          this.errorHandlerService.handleError(
            error,
            ' Error al registrar el cliente'
          );
          return of(error);
        }),
        takeUntil(this.destroy$),
        finalize(() => (this.isLoading = false))
      )
      .subscribe();
  }

  private sendRemito(
    parts: PartRemitoModel[],
    dni: string,
    cuit: string,
    email: string,
    cantidad: number,
    total: string
  ): void {
    this.apiService
      .sendRemito(parts, dni, cuit, total, cantidad)
      .pipe(
        tap((response) => {
          if (this.checkoutStatus === true) {
            this.isLoading = false;
            Swal.fire({
              title: '¡Generación de remito exitosa!',
              icon: 'success',
              text: `Te enviamos al correo electrónico ${email}, el resumen de la orden de compra.A la brevedad un asesor se comunicara con usted.`,
              showCloseButton: false,
              showCancelButton: false,
              showConfirmButton: true,
              confirmButtonText: 'Volver al inicio',
              buttonsStyling: false,
              customClass: {
                confirmButton: 'checkout-button',
                popup: 'custom-container',
                icon: 'icon',
                title: 'custom-tittle',
              },
            }).then((result) => {
              if (result.isConfirmed) {
                this.cartService.checkoutHandler();
                this.cartService.clearCart();
                this.cartService.cartHandler();
                this.router.navigate(['/home']);
                this.miFormulario.reset({
                  name: '',
                  email: '',
                  phone: '',
                  'dni-cuit': '',
                  captcha: false,
                });
              } else {
                this.cartService.checkoutHandler();
                this.cartService.clearCart();
                this.miFormulario.reset({
                  name: '',
                  email: '',
                  phone: '',
                  'dni-cuit': '',
                  captcha: false,
                });
              }
            });
          }
        }),
        catchError((error) => {
          this.errorHandlerService.handleError(
            error,
            'Error al enviar el remito'
          );
          this.isLoading = false;
          return of(error);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  private cartHandler(): void {
    this.cartService.cart$
      .pipe(
        takeUntil(this.destroy$),
        map(
          (cartItems) =>
            (this.parts = cartItems.map(({ product, quantity }) => ({
              ...product.fullProduct!,
              cantidad: quantity,
              subtotal: product.priceNumber * quantity,
              subtotal_descuento: product.priceNumber * quantity,
            })))
        )
      )
      .subscribe();
  }
}
