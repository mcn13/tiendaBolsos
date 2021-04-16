import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pasarela',
  templateUrl: './pasarela.component.html',
  styleUrls: ['./pasarela.component.scss'],
})
export class PasarelaComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  volver() {
    this.router.navigateByUrl('productos');
  }
}
