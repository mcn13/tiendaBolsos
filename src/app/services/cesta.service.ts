import { Injectable } from '@angular/core';
import { cestaItem } from '../interfaces/cestaItem';

@Injectable({
  providedIn: 'root'
})
export class CestaService {

  productos: any[];

  constructor() { }

  getProductos(){
    //obtener productos
    return this.productos
  }

  setProductos(productos: any[]){
    //estableces productos
    return this.productos = new Array(productos);
  }

  addProductoToArray(productos: cestaItem){
    //añadir productos
    this.productos.push(productos);
    console.log('array cesta', this.productos)
  }

  deleteProductoArray(idproducto){

  }
}
