import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { API_Token } from './token';


@Injectable()
export class FoodService {
	
  constructor(
    private http: HttpClient,
    private api: string 
  ) {
    console.log(this.api);
  }
  getFood() { return this.http.get<any>(this.api)
      
  }
}