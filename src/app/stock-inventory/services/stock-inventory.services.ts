import { HttpClient, HttpResponse} from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {map, catchError} from 'rxjs/operators'




@Injectable() 

export class StockInventoryService { 
    
    constructor( 
        private http: HttpClient
    ){  }

    getCartItems() { 
        return this.http
        .get('/api/cart')
        .map((response: Response) => response.json())
        .catchError((error: any) => Observable.throwError new Error("");
        (error.json()));
    }
}