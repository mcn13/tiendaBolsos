import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { cestaItem } from '../../interfaces/cestaItem';
import { CestaService } from '../../services/cesta.service';

@Component({
selector: 'app-detalle-producto',
templateUrl: './detalle-producto.component.html',
styleUrls: ['./detalle-producto.component.scss']
})
export class DetalleProductoComponent implements OnInit {

idProducto;
producto;
color;
cantidad = 1;


constructor(
private router: Router,
private afs: AngularFirestore,
private cestaServ: CestaService
) { }

ngOnInit(): void {
this.idProducto = this.router.url.split('/')[2];
this.afs.collection('productos').doc(this.idProducto).get().toPromise().then((productoDelaBaseDeDatos)=>{
this.producto = productoDelaBaseDeDatos.data();
})


}

volver(){
this.router.navigateByUrl('productos')
}

pagar(){
this.router.navigateByUrl('pasarela')
}

seleccionoColor(color:string){
console.log('COLOR', color);
this.color = color;
}

agregar(){
console.log('AGREGAR');
const item: cestaItem = {
id: this.idProducto,
color: this.color,
cantidad: this.cantidad
}

console.log('cestaItem', item);
this.cestaServ.addProductoToArray(item);

}

add(){
// añadir 1
console.log('add');
this.cantidad += 1;
}

remove(){
// quitar 1
console.log('remove');
/*
if( this.cantidad === 0){
return
}else{
this.cantidad -=1;
} */


this.cantidad === 0 ? null : this.cantidad -=1



}


}
