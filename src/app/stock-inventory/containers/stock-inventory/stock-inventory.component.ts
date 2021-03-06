import { templateJitUrl } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormControl, FormGroup,FormArray} from '@angular/forms';

@Component({
  selector: 'stock-inventory',
  templateUrl: './stock-inventory.component.html',
  styleUrls: ['stock-inventory.component.scss'],
})
export class StockInventoryComponent {
  form = new FormGroup({
    store: new FormGroup({
      branch: new FormControl(''), 
      code: new FormControl('')
    }), 
    selector: new FormGroup({
      product_id: new FormControl(''), 
      quantity: new FormControl(10)
    }), 
    stock: new FormArray([])
  })
  onSubmit(){
    console.log('Submit', this.form.value); 
  }
}