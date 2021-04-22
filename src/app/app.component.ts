import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor( private route: Router){
  }

  title = 'Tienda Bolsos';
  pasarela(){
  this.route.navigateByUrl("pasarela");

  }
  home(){
  this.route.navigateByUrl("productos");
  }
}
