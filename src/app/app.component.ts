import { Component, OnInit} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  styleUrls:['app.component.scss'],
  templateUrl: './app.component.html',
 
  
})
export class AppComponent implements OnInit  {
  constructor(private router: Router) {}
  ngOnInit() {
    this.router.events
    .pipe(
      filter(event => event instanceof NavigationEnd))
       .subscribe(event => {
        console.log(event); 
      });
  } 
}




