import { Component, Input} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'stock-products',
  templateUrl: './stock-products.component.html',
  styleUrls: ['./stock-products.component.scss']
})
export class StockProductsComponent  {
@Input()
parent: FormGroup; 
 
}
