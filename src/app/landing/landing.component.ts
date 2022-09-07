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
  ShowCup = false;
  ShowDetails1 = false;
  ShowDetails2 = false;
  ShowDetails3 = false;
  ShowDetails4 = false;
  ShowDetails5 = false;
  ShowDetails6 = false;
  ShowDetails7 = false;

  ShowDetails11 = false;
  ShowDetails12 = false;

  ShowDetails21 = false;
  ShowDetails22 = false;

  compter = 0;

  constructor() {

  }

  ngOnInit() { }

  selectElement(stuff) {
    // console.log(this.compter);
    if (stuff == 0) {
        this.ShowCup = true;
      };
      // console.log(this.ShowCup);
    if (this.compter == 0 || this.compter == 1) {
      if (stuff == 1) {
        // pomme
        this.ShowDetails1 = true;
        this.ShowCup = false;
        this.select = true;
        ++this.compter;
      };
      if (stuff == 2) {
        // ananas
        this.ShowDetails2 = true;
        this.ShowCup = false;
        this.select = true;
        ++this.compter;
      };
      if (stuff == 3) {
        // kiwi
        this.ShowDetails3 = true;
        this.ShowCup = false;
        this.select = true;
        ++this.compter;
      };
      if (stuff == 4) {
        // mangue
        this.ShowDetails4 = true;
        this.ShowCup = false;
        this.select = true;
        ++this.compter
      };
      if (stuff == 5) {
        // fraise
        this.ShowDetails5 = true;
        this.ShowCup = false;
        this.select = true;
        ++this.compter
      };
      if (stuff == 6) {
        // myrtilles
        this.ShowDetails6 = true;
        this.ShowCup = false;
        this.select = true;
        ++this.compter
      };
      if (stuff == 7) {
        // orange
        this.ShowDetails7 = true;
        this.ShowCup = false;
        this.select = true;
        ++this.compter
      };
    };
    // else {
    //   this.ShowDetails1 = false;
    //   this.ShowDetails2 = false;
    //   this.ShowDetails3 = false;
    //   this.ShowDetails4 = false;
    //   this.ShowDetails5 = false;
    //   this.ShowDetails6 = false;
    //   this.ShowDetails7 = false;
    //   this.ShowCup = true;
    //   this.select = false;
    //   this.compter = 0;
    // };

    if (stuff == 11) {
      this.ShowDetails11 = true;
      this.ShowDetails12 = false;
      this.ShowCup = false;
      this.select = true;
    }
    if (stuff == 12) {
      this.ShowDetails12 = true;
      this.ShowDetails11 = false;
      this.ShowCup = false;
      this.select = true;
    }

    if (stuff == 21) {
      this.ShowDetails21 = true;
      this.ShowDetails22 = false;
      this.ShowCup = false;
      this.select = true;
    }
    if (stuff == 22) {
      this.ShowDetails22 = true;
      this.ShowDetails21 = false;
      this.ShowCup = false;
      this.select = true;
    }
  }

  reload() {
    this.select = false;
    this.ShowCup = false;
    this.ShowDetails1 = false;
    this.ShowDetails2 = false;
    this.ShowDetails3 = false;
    this.ShowDetails4 = false;
    this.ShowDetails5 = false;
    this.ShowDetails6 = false;
    this.ShowDetails7 = false;
    this.ShowDetails11 = false;
    this.ShowDetails12 = false;
    this.ShowDetails21 = false;
    this.ShowDetails22 = false;
    this.compter = 0;

  }
}
