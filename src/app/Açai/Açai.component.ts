import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Açai',
  templateUrl: './Açai.component.html',
  styleUrls: ['./Açai.component.css']
})
export class AçaiComponent implements OnInit {
  mobile = false;
  
  constructor() { }

  ngOnInit() {
    if (window.screen.width <= 500) {
      this.mobile = true;
    };
  }

}
