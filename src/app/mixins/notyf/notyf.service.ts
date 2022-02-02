import {Inject, Injectable} from "@angular/core";
import { NOTYF } from './notyf.token';
import { Notyf } from 'notyf';

@Injectable({
  providedIn: 'root'
})
export class NotyfService {

  constructor(
    @Inject(NOTYF) private notyf: Notyf
  ) {}

  public showNotyf(type: string, message: string) {
    this.notyf.open({
      type: type,
      message: message,
      duration: 2000
    });
  }
}
