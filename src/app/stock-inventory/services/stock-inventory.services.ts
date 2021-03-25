import { HttpClient, HttpErrorResponse} from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import { Observable, throwError} from 'rxjs';
import { map, catchError } from 'rxjs/operators'
//import { catchError} from 'rxjs/operators';
//import 'rxjs/add/operator/catch'
//import 'rxjs/add/observable/throw'




@Injectable() 

export class StockInventoryService {
    
     private shopUrl = 'http://localhost:3000';
    
    constructor( 
        private http: HttpClient
    ){  }

    getCartItems() { 
        return this.http
        .get('http://localhost:3000/cart')
        .pipe(
        map((response: Response) => response.json()),
        //catchError((error: any) => throwError('error occured')));
        catchError( (error: HttpErrorResponse) => { throwError(error) }))
    }
}