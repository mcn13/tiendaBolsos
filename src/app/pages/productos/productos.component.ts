import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {
  bolsos = [];
  constructor(private db: AngularFirestore) {}

  ngOnInit(): void {
    // conectamos con la base de datos
    this.db
      .collection('bolsos')
      .valueChanges()
      .subscribe((res) => {
        console.log('res', res);
      });
  }
}
