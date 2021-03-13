import { ConstantPool, templateJitUrl } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup,FormArray} from '@angular/forms';
import { Product} from "../../models/product.interface";

@Component({
  selector: 'stock-inventory',
  templateUrl: './stock-inventory.component.html',
  styleUrls: ['stock-inventory.component.scss'],
})

export class StockInventoryComponent {
  products: Product[] = [
    { "id": 1, "price": 2800, "name": "MacBook Pro"}, 
    { "id": 2, "price": 2850, "name": "Usb"},
    { "id": 3, "price": 3000, "name": "Rolex"},
    { "id": 4, "price": 280, "name": "Floppy Disk"},
    { "id": 5, "price": 4000, "name": "Zune"},
    
    

  ]; 
  form = this.fb.group({
    store: this.fb.group({
      branch: (''), 
      code:  ('')
    }), 
    selector: this.createStock({}), 
    stock: this.fb.array([
      this.createStock({ product_id: 1, quantity: 10}), 
      this.createStock({ product_id: 3, quantity: 50}), 
      ])
  })

  constructor( private fb: FormBuilder) {}

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