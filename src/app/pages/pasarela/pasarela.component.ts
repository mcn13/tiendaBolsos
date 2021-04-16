import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pasarela',
  templateUrl: './pasarela.component.html',
  styleUrls: ['./pasarela.component.scss'],
})
export class PasarelaComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private location: Location, private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }

  volver() {
    // te lleva hacia la pagina anterior
    this.location.back();
  }
}
