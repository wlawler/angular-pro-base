import { Component, Input} from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'stock-products',
  templateUrl: './stock-products.component.html',
  styleUrls: ['./stock-products.component.scss']
})
export class StockProductsComponent  {
@Input()
parent: FormGroup; 


get stocks(){
return (this.parent.get('stock') as FormArray).controls;
}
}
