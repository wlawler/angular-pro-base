import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, ValidationErrors } from "@angular/forms";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { StockInventoryService } from "../../services/stock-inventory.services";

export class StockValidators {
    static checkBranch(control: AbstractControl) {
      const regexp = /^[a-z]\d{3}$/i;
      const valid = regexp.test(control.value); 
      return valid ? null : { invalidBranch: true}; 
    }
    static checkStockExists(control: AbstractControl) {
        const stockItem = control.get('stock');
        const selector = control.get('selector'); 

        if (!(stockItem && selector)) return null; 

        const exists = stockItem.value.some((stock) => {
            return stock.product_id === parseInt(selector.value.product_id, 10); 
        });

        return exists ? { stockExists: true} : null; 
    }
}

/*
export class checkBranchIdValidator  implements AsyncValidator {
    constructor(private stockInventoryService: StockInventoryService) {}

    validate(ctrl: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> 
    {
        return this.stockInventoryService.checkBranchId(ctrl.value) .pipe(
            map( branchExist => (branchExist ? null: { existingBranch: true })), 
            catchError(() => of(null))
            );
        
    }
    
} */