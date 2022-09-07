

import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carrousel',
  templateUrl: 'carrousel.component.html',
  providers: [CarrouselComponent]  // add NgbCarouselConfig to the component providers
})
export class CarrouselComponent {
  showNavigationArrows = true;
  showNavigationIndicators = false;
  interval = 2000;
  // images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);
  images = ['./assets/img/car-hand.jpeg',
  "./assets/img/car-açai.jpg",
    "./assets/img/car-jungle.jpeg",
    "./assets/img/car-berries2.jpeg",
    "./assets/img/car-jungle2.jpeg",
    "./assets/img/car-palmier.jpeg",
    "./assets/img/car-berries3.jpg",
    "./assets/img/car-pairot.jpeg",
    "./assets/img/car-açai2.jpg",
  ];

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }
}

