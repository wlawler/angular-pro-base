//import { ConstantPool, templateJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { forkJoin}  from 'rxjs';
import { StockInventoryService} from '../../services/stock-inventory.services'

import { FormBuilder, FormGroup,FormArray} from '@angular/forms';
import { Product, Item} from "../../models/product.interface";

@Component({
  selector: 'stock-inventory',
  templateUrl: './stock-inventory.component.html',
  styleUrls: ['stock-inventory.component.scss'],
})

export class StockInventoryComponent implements OnInit {
  products: Product[]; 

  productMap: Map<number, Product>;
  form = this.fb.group({
    store: this.fb.group({
      branch: (''), 
      code:  ('')
    }), 
    selector: this.createStock({}), 
    stock: this.fb.array([])
  })

  constructor( private fb: FormBuilder,
               private stockService: StockInventoryService
               ) {}


               /*
              ngOnInit() {
                this.dataService.multipleStoreSources().subscribe(storeGetList = {
                  this.cartData =  = 
                })
              }

               */

  ngOnInit(){ 
    let cart = this.stockService.getCartItems(); 
    let products = this.stockService.getProducts();

    
    forkJoin([cart, products])
    .subscribe(([cart, products]: [Item[], Product[]]) => {
     const myMap = products 
       .map<[number, Product]> (product => [product.id, product]); 

       this.productMap = new Map<number, Product>(myMap); 
       this.products = products; 
       cart.forEach(item => this.addStock(item));



     });
  }

  createStock(stock) {
    return this.fb.group({
      product_id: parseInt(stock.product_id, 10) || '',
      quantity: stock.quantity || 10
    })
  }

  addStock(stock) {
    const control = this.form.get('stock') as FormArray; 
    control.push(this.createStock(stock));
  }

  removeStock({group, index }: { group: FormGroup, index: number}) {
    const control = this.form.get('stock') as FormArray; 
    control.removeAt(index);
  }

  onSubmit(){
    console.log('Submit', this.form.value); 
  }
}