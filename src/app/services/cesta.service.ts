import { Injectable } from '@angular/core';
import { cestaItem } from '../interfaces/cestaItem';

@Injectable({
  providedIn: 'root'
})
export class CestaService {

  productos: cestaItem[] = [];


  constructor() { }

  getProductos(){
  // obtener productos
  return this.productos
  }

  setProductos(productos: cestaItem[]){
  // establecer productos
  this.productos = [...productos];
  }

  addProductoToArray(producto: cestaItem ){
  // añadir producto
  this.productos.push(producto);
  console.log('array cesta', this.productos)
  }


  deleteProductOfArray(item: cestaItem){
  this.productos.splice(this.productos.indexOf(item), 1);
  }



  }
