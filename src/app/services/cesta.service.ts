import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { cestaItem } from '../interfaces/cestaItem';

@Injectable({
  providedIn: 'root'
})


export class CestaService {

  productos: cestaItem[] = [];

  private precioObservable = new BehaviorSubject<number>(0); /// creo el observable;
  importeFinal$ = this.precioObservable.asObservable(); // aqui es donde me voy a tener que subscribir;


  cambiarTotalAPagar(importeFinal){
  this.precioObservable.next(importeFinal);
  }

  precioFinal(cestaItem: cestaItem){
  return cestaItem.precioOferta || cestaItem.precio
  }


  getProductos(){
  // obtener productos
  return this.productos
  }


  setProductos(productos: cestaItem[]){
  // establecer productos
  this.productos = [...productos];
  }



  calcularImporteFinal():number{
  let sumatorio = 0;
  this.productos.forEach((producto: cestaItem)=>{
  sumatorio += ( this.precioFinal(producto) * producto.cantidad ) ///producto.
  })
  return sumatorio
  }



  addProductoToArray(producto: cestaItem ){
  // añadir producto
  this.productos.push(producto);
  // aqui hay que hacer alguna logica para sumar el precio;
  this.cambiarTotalAPagar( this.calcularImporteFinal() )
  }




  deleteProductOfArray(item: cestaItem){

  // splice quita el elemento del array
  this.productos.splice(this.productos.indexOf(item), 1)
  this.cambiarTotalAPagar( this.calcularImporteFinal() )
  // aqui habra que hacer alguna logica para restar el precio;



  }


}
