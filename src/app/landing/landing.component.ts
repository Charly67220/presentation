import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxCaptureService } from 'ngx-capture';
import { tap } from 'rxjs';
import { FormControl, FormGroup, NgForm, NgModel, NgModelGroup } from '@angular/forms';





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
  ShowDetails8 = false;

  ShowDetails11 = false;
  ShowDetails12 = false;

  ShowDetails21 = false;
  ShowDetails22 = false;
  ShowDetails23 = false;
  ShowDetails24 = false;
  ShowDetails25 = false;

  ShowPhoto = false;
  image: any;
  imagePNG: any;

  compter = 0;

  event: any[];

  constructor(
    private captureService: NgxCaptureService,
    private httpClient: HttpClient,
    public http: HttpClient,
  ) {

  }

  @ViewChild('screen', { static: true }) screen: any;

  ngOnInit() {


    // this.httpClient
    //   // .get('https://sos-firebase-default-rtdb.firebaseio.com/actualites.json')
    //   .get<any[]>('https://sos-firebase-default-rtdb.firebaseio.com/event.json')
    //   .subscribe(
    //     (response) => {
    //       this.event = response;
    //       console.log(">>>>>>>>>>>>>>>> ", this.event, "<<<<<<<<<<<<<<<<<<<<");
    //       // this.emitAppareilSubject();
    //     },
    //     (error) => {
    //       console.log('Erreur ! : ' + error);
    //     }
    //   );
  }

  capture() {
    // Capture de la proposition açai
    this.captureService.getImage(this.screen.nativeElement, true)
      .pipe(
        tap(img => {
          // controle des info récupérer
          // console.log(form.value);
          this.image = img;
          // console.log("this.image", this.image);
          this.ShowPhoto = true;

          // console.log(this.image)




          // création de l'objet pour la base
          // this.event = [
          //   form.value,
          //   img,
          // ]

          // Envoie sur le serveur
          // this.httpClient
          //   .post('https://sos-firebase-default-rtdb.firebaseio.com/event.json', this.event)
          //   // changer post par put pour màj
          //   .subscribe(
          //     () => {
          //       console.log('Enregistrement terminé !');
          //     },
          //     (error) => {
          //       console.log('Erreur ! : ' + error);
          //     }
          //   );
        })
      ).subscribe();
  }


  onSubmit(form: NgForm) {

    this.capture();

    form.value.fruit = ["POMME : " + this.ShowDetails1 +
      ", ANANAS : " + this.ShowDetails2 +
      ", KIWI : " + this.ShowDetails3 +
      ", MANGUE : " + this.ShowDetails4 +
      ", FRAISE : " + this.ShowDetails5 +
      ", MYRTILLES : " + this.ShowDetails6 +
      ", ORANGE : " + this.ShowDetails7 +
      ", BANANE : " + this.ShowDetails8]

    form.value.granola = ["BIO : " + this.ShowDetails11 + ", AVOINE : " + this.ShowDetails12]
    form.value.topin = ["LAIT : " + this.ShowDetails21 + ", BEURRE : " + this.ShowDetails22
      + ", CARAMEL : " + this.ShowDetails23 + ", POPCORN : " + this.ShowDetails24 +
      ", MIEL : " + this.ShowDetails25]

    // console.log(form.value);
    // console.log(form.valid);
    if (!form.valid) {
      alert("N'oubliez pas d'indiquer votre nom ;)")
    }
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    if (form.valid) {
      this.http
        .post("https://formspree.io/f/xyyozook", form.value, httpOptions).subscribe(results => {
          // console.log(results);
          alert("Merci " + form.value.name + ", votre Açaì a bien été enregistré ! ")
          window.location.reload();
        });
    }

  }

  selectElement(stuff) {
    // this.capture();
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
      if (stuff == 8) {
        // orange
        this.ShowDetails8 = true;
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
      this.ShowDetails23 = false;
      this.ShowDetails24 = false;
      this.ShowDetails25 = false;
      this.ShowCup = false;
      this.select = true;
    }
    if (stuff == 22) {
      this.ShowDetails22 = true;
      this.ShowDetails21 = false;
      this.ShowDetails23 = false;
      this.ShowDetails24 = false;
      this.ShowDetails25 = false;
      this.ShowCup = false;
      this.select = true;
    }
    if (stuff == 23) {
      this.ShowDetails23 = true;
      this.ShowDetails21 = false;
      this.ShowDetails22 = false;
      this.ShowDetails24 = false;
      this.ShowDetails25 = false;
      this.ShowCup = false;
      this.select = true;
    }
    if (stuff == 24) {
      this.ShowDetails24 = true;
      this.ShowDetails21 = false;
      this.ShowDetails23 = false;
      this.ShowDetails22 = false;
      this.ShowDetails25 = false;
      this.ShowCup = false;
      this.select = true;
    }
    if (stuff == 25) {
      this.ShowDetails25 = true;
      this.ShowDetails24 = false;
      this.ShowDetails21 = false;
      this.ShowDetails23 = false;
      this.ShowDetails22 = false;
      this.ShowCup = false;
      this.select = true;
    }
  }

  reload() {
    this.select = false;
    this.ShowCup = true;
    this.ShowDetails1 = false;
    this.ShowDetails2 = false;
    this.ShowDetails3 = false;
    this.ShowDetails4 = false;
    this.ShowDetails5 = false;
    this.ShowDetails6 = false;
    this.ShowDetails7 = false;
    this.ShowDetails8 = false;
    this.ShowDetails11 = false;
    this.ShowDetails12 = false;
    this.ShowDetails21 = false;
    this.ShowDetails22 = false;
    this.ShowDetails23 = false;
    this.ShowDetails24 = false;
    this.ShowDetails25 = false;
    this.compter = 0;

  }

}
