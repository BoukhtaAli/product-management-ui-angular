import { Component, OnInit } from '@angular/core';
import {ProductEventService} from "../../state/productEvent.service";
import {ProductActionEvent} from "../../state/appData.state";

@Component({
  selector: 'app-app-stats',
  templateUrl: './app-stats.component.html',
  styleUrls: ['./app-stats.component.css']
})
export class AppStatsComponent implements OnInit {

  counter : number = 0;

  constructor(private productEventService : ProductEventService) { }

  ngOnInit(): void {
    this.productEventService.productEventSubjectObservable.subscribe((actionEvent: ProductActionEvent) => {
      ++this.counter;
    });
  }

}
