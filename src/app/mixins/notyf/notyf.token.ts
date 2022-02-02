import { InjectionToken } from '@angular/core';
import { Notyf } from 'notyf';

export const NOTYF = new InjectionToken<Notyf>('NotyfToken');

export function notyfFactory(): Notyf {

  return new Notyf({

    duration: 2000,
    position : {x: 'center', y: 'top'},
    types: [
      {
        type: 'warning',
        background: '#ffc107',
        dismissible: true
      },
      {
        type: 'info',
        background: '#17a2b8',
        dismissible: true
      },
      {
        type: 'error',
        background: '#dc3545',
        dismissible: true
      }
      ,
      {
        type: 'success',
        background: '#28a745',
        dismissible: true
      }
    ]
  });
}
