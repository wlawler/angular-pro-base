import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { Observable } from 'rxjs';

import { FoodService } from '../food.service';
import { HttpClient } from '@angular/common/http';

interface Side {
  name: string,
  price: number
}
export function SideFactory(httpClient) { 
  return new FoodService( httpClient, 'http://localhost:3000/sides');  
  }

@Component({
  selector: 'side-viewer',
  providers: [
    {provide: FoodService,
      useFactory:SideFactory, 
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
export class SideViewerComponent implements OnInit {
  items$: Observable<Side[]>;
  constructor(private foodService: FoodService) {}
  ngOnInit() {
    this.items$ = this.foodService.getFood();
  }
}
