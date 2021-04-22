import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { cestaItem } from '../interfaces/cestaItem';

@Injectable({
  providedIn: 'root'
})


export class CestaService {

  productos: cestaItem[] = [];

  private precioObservable = new BehaviorSubject<number>(0); /// creo el observable;
  precioActual$ = this.precioObservable.asObservable(); // aqui es donde me voy a tener que subscribir;


  cambiarPrecio(precio){
    this.precioObservable.next(precio)
  }

  precioFinal(cestaItem: cestaItem){
    return cestaItem.precioOferta || cestaItem.precio
  }


  constructor() { }

  getProductos(){
  // obtener productos
  return this.productos
  }

  setProductos(productos: cestaItem[]){
  // establecer productos
  this.productos = [...productos];
  }

  calcularImporteFinal(){
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

    const importeFinal = this.calcularImporteFinal();

    // const precio = this.precioFinal(producto);
    // console.log('precio', precio)
    // const importe = precio * producto.cantidad;
    // console.log('importe', importe);

  }


  deleteProductOfArray(item: cestaItem){
  this.productos.splice(this.productos.indexOf(item), 1);
  }



}
