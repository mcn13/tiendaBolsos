import { Location } from '@angular/common';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pasarela',
  templateUrl: './pasarela.component.html',
  styleUrls: ['./pasarela.component.scss'],
})
export class PasarelaComponent implements OnInit {
  constructor(private router: Router, private location: Location) {}

  ngOnInit(): void {}

  volver() {
    // te lleva hacia la pagina anterior
    this.location.back();
  }
}
