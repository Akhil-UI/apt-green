import { Component, OnInit, ElementRef } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-navbar-aside',
  templateUrl: './navbar-aside.component.html',
  styleUrls: ['./navbar-aside.component.scss']
})

export class NavbarAsideComponent implements OnInit {
  
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    // Initialize the tooltip
    var tooltipTriggerList = [].slice.call(this.elementRef.nativeElement.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)

      
    });
  }


}

