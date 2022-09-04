import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;
  select = false;
  ShowDetails1 = false;
  ShowDetails2 = false;
  ShowDetails3 = false;
  ShowDetails4 = false;
  ShowDetails5 = false;
  ShowDetails6 = false;
  ShowDetails7 = false;
  compter = 0;

  constructor( ) { 

  }

  ngOnInit() { }

  selectElement(stuff) {
    this.select = true;
    console.log(stuff," <<<<stuff")
    if (this.compter == 0 || this.compter == 1) {
      console.log(this.compter, "<<<<<this.compter");
      if (stuff == 1) {
        // pomme
        this.ShowDetails1 = true ;
        console.log(this.ShowDetails1);
        ++this.compter;
      };
      if (stuff == 2) {
        // ananas
        this.ShowDetails2 = true ;
        console.log(this.ShowDetails2);
        ++this.compter;
      };
      if (stuff == 3) {
        // kiwi
        this.ShowDetails3 = true ;
        console.log(this.ShowDetails3);
        ++this.compter;
      };
      if (stuff == 4) {
        // mangue
        this.ShowDetails4 = true ;
        console.log(this.ShowDetails4)
        ++this.compter
      };
      if (stuff == 5) {
        // fraise
        this.ShowDetails5 = true ;
        console.log(this.ShowDetails5)
        ++this.compter
      };
      if (stuff == 6) {
        // myrtilles
        this.ShowDetails6 = true ;
        console.log(this.ShowDetails6)
        ++this.compter
      };
      if (stuff == 7) {
        // orange
        this.ShowDetails7 = true ;
        console.log(this.ShowDetails7)
        ++this.compter
      };
    }
  


   
  }

}
