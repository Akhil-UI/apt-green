import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'apt-green';

  hideSection = true;
  hidedashboard =true;

  constructor(private router:Router){

  }
  ngOnInit(): void {
    this.router.events.subscribe(
      (val)=>{
        if (val instanceof NavigationEnd){
          if(val.url =='/dashboard'){
            this.hideSection=false
          }
          else{
            this.hideSection=true
          }
        }
      }
    )

    this.router.events.subscribe(
      (val)=>{
        if (val instanceof NavigationEnd){
          if(val.url != '/dashboard'){
            this.hidedashboard=false
          }
          else{
            this.hidedashboard=true
          }
        }
      }
    )
  }


  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  expandedIndex = 0;

  
}
