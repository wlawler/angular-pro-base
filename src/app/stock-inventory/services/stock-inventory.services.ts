import { HttpClient} from '@angular/common/http'; 
import {HttpErrorResponse,HttpResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError} from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators'
import { Product, Item } from '../models/product.interface'

//import { catchError} from 'rxjs/operators';
//import 'rxjs/add/operator/catch'
//import 'rxjs/add/observable/throw'




@Injectable() 

export class StockInventoryService {
    
     shopUrl = 'http://localhost:3000';
    
    constructor( private http: HttpClient ){  }


  
    getCartItems() { 
        return this.http.get<Item[]>(this.shopUrl+'/cart')
        .pipe(
        retry(1),
        catchError(this.handleError)); }

    getCartItems_1(){ 
      return this.http.get(this.shopUrl);
    }
   
    getProducts() { 
      return this.http.get<Product[]>(this.shopUrl+'/products')
      .pipe(
        retry(1), 
        catchError(this.handleError)); }

        getProducts_1(){
          return this.http.get(this.shopUrl);
        }
      
    

    private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
         // A client-side or network error occurred. Handle it accordingly.
         console.error('An error occured:', error.error.message); 
      } else {
        // The backend returned an unsuccessful response code. 
        // The response body may contain clues as to what went wrong.
        console.error( 
          `Backend returned code ${error.status},` + 
          `body was: ${error.error}`); 
        }
        return throwError( 
          'Something bad happened; please try again later.');
        

        
      }
      }
    
  
