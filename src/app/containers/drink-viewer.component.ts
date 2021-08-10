import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { Observable } from 'rxjs';

import { FoodService } from '../food.service';
import { HttpClient } from '@angular/common/http';

interface Drink {
  name: string,
  price: number
}

export function DrinkFactory(httpClient) { 
  return new FoodService( httpClient, 'http://localhost:3000/drinks');  
  }
@Component({
  selector: 'drink-viewer',
  providers: [
    
    {provide: FoodService,
     useFactory: DrinkFactory, 
     deps: [
      HttpClient 
    ]}
  ],
  template: `
    <div>
      <div *ngFor="let item of items$ | async">
        {{ item.name }} {{ item.price | currency:'USD':true }}
      </div>
    </div>
  `
})
export class DrinkViewerComponent implements OnInit {
  items$: Observable<Drink[]>;
  constructor(private foodService: FoodService) {}
  ngOnInit() {
    this.items$ = this.foodService.getFood();
  }
}