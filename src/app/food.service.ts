import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { API_Token } from './token';


@Injectable()
export class FoodService {
	
  constructor(
    private http: HttpClient,
    @Inject(API_Token) private api: string
  ) {
    console.log('Ultimate Wes');
  }
  getFood() { return this.http.get<any>(this.api)
      
  }
}