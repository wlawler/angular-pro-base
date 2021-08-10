import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { Observable } from 'rxjs';

import { FoodService } from '../food.service';
import { HttpClient } from '@angular/common/http';

interface Pizza {
  name: string,
  price: number
}
export function PizzaFactory(httpClient) { 
  return new FoodService( httpClient, 'http://localhost:3000/Pizzas');  
  }
@Component({
  selector: 'pizza-viewer',
  providers: [
    {provide: FoodService,
      useFactory: PizzaFactory ,
       deps: [
          HttpClient 
       ] } 
  ],
  template: `
    <div>
      <div *ngFor="let item of items$ | async">
        {{ item.name }} {{ item.price | currency:'USD':true }}
      </div>
    </div>
  `
})
export class PizzaViewerComponent implements OnInit {
  items$: Observable<Pizza[]>;
  constructor(private foodService: FoodService) {}
  ngOnInit() {
    this.items$ = this.foodService.getFood();
  }
}
