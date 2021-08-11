import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { Observable } from 'rxjs';

import { FoodService } from '../food.service';
import { HttpClient } from '@angular/common/http';

interface Side {
  name: string,
  price: number
}


@Component({
  selector: 'side-viewer',
  providers: [
     FoodService,
     
       
  ],
  template: `
    <div>
      <div *ngFor="let item of items$ | async">
        {{ item.name }} {{ item.price | currency:'USD':true }}
      </div>
    </div>
  `
})
export class SideViewerComponent implements OnInit {
  items$: Observable<Side[]>;
  constructor(private foodService: FoodService) {}
  ngOnInit() {
    this.items$ = this.foodService.getSides();
  }
}
