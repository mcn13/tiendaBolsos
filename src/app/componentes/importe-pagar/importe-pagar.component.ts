import { Component, OnInit } from '@angular/core';
import { CestaService } from 'src/app/services/cesta.service';

@Component({
  selector: 'app-importe-pagar',
  templateUrl: './importe-pagar.component.html',
  styleUrls: ['./importe-pagar.component.scss']
})
export class ImportePagarComponent implements OnInit {

  importePagar: number = localStorage.getItem('importePagar') ? parseInt(localStorage.getItem('importePagar')): 0


  constructor( private cestaServ: CestaService) { }

  ngOnInit(): void {
  /// me voy a subscribir al observable que me va a notificar de los cambios del importe a pagar:
  this.cestaServ.importeFinal$.subscribe((imp:number)=>{
    this.importePagar = imp;
    localStorage.setItem('importePagar', imp.toString())
  })
  }

}