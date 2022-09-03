import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mobile = false;
  
  constructor() { }

  ngOnInit() {
    if (window.screen.width <= 500) {
      this.mobile = true;
    };
  }

}
