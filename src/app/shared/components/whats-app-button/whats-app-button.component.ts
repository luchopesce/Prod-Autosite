import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ErrorHandlerService } from '../../services/error.service';
import { UtilsService } from '../../services/utils.service';
import { Subject, of, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-whats-app-button',
  standalone: true,
  imports: [],
  templateUrl: './whats-app-button.component.html',
  styleUrl: './whats-app-button.component.scss',
})
export class WhatsAppButtonComponent {
  private destroy$ = new Subject<void>();

  whatsApp: string = '';

  constructor(
    private apiService: ApiService,
    private errorHandlerService: ErrorHandlerService,
    private utilsService: UtilsService
  ) {}

  ngOnInit(): void {
    this.getContact();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private getContact(): void {
    this.apiService
      .getContactInfo('Whatsapp')
      .pipe(
        tap({
          next: (data) => {
            if (
              data &&
              data.length > 0 &&
              data[0].Valor &&
              typeof data[0].Valor === 'string'
            ) {
              const number = this.utilsService.formatWhatsAppNumber(
                data[0].Valor
              );
              this.whatsApp = `https://wa.me/${number}`;
            }
          },
          error: (error) => {
            this.errorHandlerService.handleError(
              error,
              'Error al obtener la información de WhatsApp'
            );
            return of([]);
          },
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }
}
