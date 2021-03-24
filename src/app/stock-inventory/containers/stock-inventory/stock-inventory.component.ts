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
  products: Product[]; 
  form = this.fb.group({
    store: this.fb.group({
      branch: (''), 
      code:  ('')
    }), 
    selector: this.createStock({}), 
    stock: this.fb.array([])
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