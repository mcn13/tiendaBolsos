import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {
  bolsos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  constructor(private db: AngularFirestore, private router: Router) {}

  ngOnInit(): void {
    // conectamos con la base de datos
    this.db
      .collection('bolsos')
      .valueChanges()
      .subscribe((res) => {
        console.log('res', res);
      });
  }
  navegar(i) {
    console.log('navegando', i);
    // diferencia navigaterByUrl, espera un string, Navigate: te permite pasar parametros
    // navegamos a una url dinamica
    // this.router.navigateByUrl(`detalle-producto/${i}`);
    this.router.navigate(['detalles-productos', i]);
  }
}
