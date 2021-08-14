import { Component } from "@angular/core";
import { Store } from "./store";


@Component({
  selector: 'app-root',
  styleUrls:['app.component.scss'],
  templateUrl: './app.component.html',
 
  
})
export class AppComponent {

  todos$ = this.store.select<any[]>('todos');

  constructor(
    private store: Store
  ) {
    this.store.set('todos', [{ id: 1, name: 'Eat dinner' }, { id: 2, name: 'Do washing' }]);
  }

}
