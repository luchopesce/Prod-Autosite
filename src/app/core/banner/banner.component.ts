import { Subject, of, takeUntil, tap } from 'rxjs';
import { ApiService } from './../../shared/services/api.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ErrorHandlerService } from '../../shared/services/error.service';
import { UtilsService } from '../../shared/services/utils.service';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent implements OnInit, OnDestroy {
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
