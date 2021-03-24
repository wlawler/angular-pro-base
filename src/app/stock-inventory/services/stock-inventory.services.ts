import { HttpClient, HttpResponse} from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import 'rxjs/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'




@Injectable() 

export class StockInventoryService {
    
     private shopUrl = 'http://localhost:3000';
    
    constructor( 
        private http: HttpClient
    ){  }

    getCartItems() { 
        return this.http
        .get('/cart')
        .map((response: Response) => response.json())
        .catchError((error: any) => Observable.throw new Error("");
        (error.json()));
    }
}