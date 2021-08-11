import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { API_Token } from './token';


@Injectable()
export class FoodService {
	
  constructor(
    private http: HttpClient,

  ) {}
  getPizzas() { return this.http.get<any>(' http://localhost:3000/pizzas')}
  getSides() { return this.http.get<any>( 'http://localhost:3000/sides')}
  getDrinks() { return this.http.get<any>( 'http://localhost:3000/drinks')}    
  }
