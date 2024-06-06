import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import Swal, { SweetAlertIcon, SweetAlertPosition } from 'sweetalert2';

export interface Notification {
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notificationSubject: Subject<Notification> =
    new Subject<Notification>();

  public notification$ = this.notificationSubject.asObservable();

  constructor() {}

  showSuccess(message: string): void {
    this.showNotification('success', message);
  }

  showError(message: string): void {
    this.showNotification('error', message);
  }

  showInfo(message: string): void {
    this.showNotification('info', message);
  }

  showWarning(
    message: string,
    tittle: string,
    confirmText: string
  ): Promise<boolean> {
    return this.showNotification(
      'warning',
      message,
      false,
      'center',
      true,
      0,
      tittle,
      confirmText,
      true,
      'icon'
    );
  }

  showSuccessToast(message: string): void {
    this.showNotification('success', message, true, 'top-start', false, 1500);
  }

  showErrorToast(message: string): void {
    this.showNotification('error', message, true, 'top-end', false, 1300);
  }

  private showNotification(
    type: 'success' | 'error' | 'info' | 'warning',
    message: string,
    toast: boolean = false,
    position: SweetAlertPosition = 'center',
    showCloseButton: boolean = true,
    timer: number = 0,
    tittle: string = '',
    confirmText: string = '',
    cancelButtonText: boolean = false,
    iconSize: string = ''
  ): Promise<boolean> {
    let icon: SweetAlertIcon;
    switch (type) {
      case 'success':
        icon = 'success';
        break;
      case 'error':
        icon = 'error';
        break;
      case 'info':
        icon = 'info';
        break;
      case 'warning':
        icon = 'warning';
        break;
    }
    return Swal.fire({
      title: tittle,
      text: message,
      icon: icon,
      confirmButtonText: confirmText,
      cancelButtonText: 'Cancelar',
      toast: toast,
      showCancelButton: cancelButtonText,
      position: position,
      showConfirmButton: showCloseButton,
      buttonsStyling: false,
      customClass: {
        confirmButton: 'confirm-button',
        cancelButton: 'cancel-button',
        icon: iconSize,
      },
      timer: timer,
    }).then((result) => {
      if (result.isConfirmed) {
        return true;
      } else {
        return false;
      }
    });
  }
}
