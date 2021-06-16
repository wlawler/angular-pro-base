import { HttpClient, HttpParams} from '@angular/common/http'; 
import {HttpErrorResponse,HttpResponse} from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Observable, of, throwError} from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators'
import { Product, Item } from '../models/product.interface'






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

        
    checkBranch(id:string): Observable<boolean> {
      return this.http.get(this.shopUrl+'/branches')
      .pipe(
        map(( branchIdList: Array<any>) =>
        branchIdList.filter(branchId => branchId.id === id)), 
        map(id => !id.length), 
        catchError(this.handleError)

      );
     
    }
/*
       checkBranchId2(id: string) {
        return this.http
        .get<boolean>((this.shopUrl + '/branches'));
      

      }
      */
/*

    
    checkBranchId (id: string): Observable<boolean> {
      const invalidBranch = (this.shopUrl + '/branches')
    }
    
    AsyncValidatorFn {
       return (control: AbstractControl): Observable<ValidationErrors> => {
         return zipcodeService.(this.shopUrl + '/branches')(control.value).pipe(
           map((result:boolean) => result ? null : {inValidBranch: true})
         ); 
       }; 
      }

    
        checkBranchId(id: string): Observable<boolean>{
          let params = new HttpParams()
               params.set('id', id);
          return this.http
          .get<boolean>( this.shopUrl + '/branches', {params}) 
          .pipe(
             map((response: HttpResponse) => response.json()),
             map((response: any[]) => !!response.length)
           catchError(this.handleError) )
          
        }
     
*/
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
    
  
