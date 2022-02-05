import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {ProductActionEvent} from "./appData.state";

@Injectable({
  providedIn: "root"
})
export class ProductEventService {

  productEventSubject : Subject<ProductActionEvent> = new Subject<ProductActionEvent>();
  productEventSubjectObservable = this.productEventSubject.asObservable();

  publishEvent(event : ProductActionEvent){
    this.productEventSubject.next(event);
  }
}
