import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ApiService } from '../../shared/services/api.service';
import { Observable, Subject, catchError, forkJoin, of, takeUntil } from 'rxjs';
import { ErrorHandlerService } from '../../shared/services/error.service';

export type ContactInfo = {
  Whatsapp: string;
  Email: string;
  Horario: string;
};

export interface ResultItem {
  [key: string]: {
    Valor: string;
  };
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatIconModule, RouterLink, RouterLinkActive],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit, OnDestroy {
  @Input() logo!: string;

  private destroy$ = new Subject<void>();

  information = {
    Whatsapp: '',
    Email: '',
    Horario: '',
  };

  constructor(
    private apiService: ApiService,
    private errorHandlerService: ErrorHandlerService
  ) {}

  ngOnInit(): void {
    this.getContactInfo();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private getContactInfo(): void {
    const requests = Object.keys(this.information).reduce((acc, key) => {
      acc[key] = this.apiService.getContactInfo(key);
      return acc;
    }, {} as Record<string, Observable<any>>);

    forkJoin(requests)
      .pipe(
        takeUntil(this.destroy$),
        catchError((error) => {
          this.errorHandlerService.handleError(
            error,
            'Error al obtener información de contacto'
          );

          return of({});
        })
      )
      .subscribe((results: Record<string, ResultItem>) => {
        Object.keys(results).forEach((key) => {
          this.information[key as keyof ContactInfo] =
            results[key][0].Valor || '';
        });
      });
  }
}
