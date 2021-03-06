import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { producto } from 'src/app/interfaces/producto';
import { Filtro } from '../../interfaces/filtro';
import { CestaService } from '../../services/cesta.service';

@Component({
selector: 'app-productos',
templateUrl: './productos.component.html',
styleUrls: ['./productos.component.scss']
})


export class ProductosComponent implements OnInit {

    productos: producto[] = [];
    productosMostrar: producto[] = [];
    elementosFavoritos= ( localStorage.getItem('elementosFavoritos') )? localStorage.getItem('elementosFavoritos').split(',') : [] ;
    mostrarFavorito: boolean = true;

    constructor(

      private db: AngularFirestore,
      private router: Router,
      private cestaServ: CestaService
      ){
    }

    selectFavorite(producto: producto): void{

      this.mostrarFavorito = !this.mostrarFavorito;

      (this.elementosFavoritos.indexOf(producto.url) >= 0) ? null : this.elementosFavoritos.push( producto.url);
      localStorage.setItem('elementosFavoritos', this.elementosFavoritos.toString())
      console.log(this.elementosFavoritos);

    }

    deselectFavorite(producto){

        console.log('desselect produ', producto);
        console.log('ID A DESSELECCIONAR', producto.url)

        const index = this.elementosFavoritos.indexOf(producto.url);

        this.mostrarFavorito = !this.mostrarFavorito;

        if ( index >= 0) {
          console.log('INDEX');
          this.elementosFavoritos.splice(index, 1)
          localStorage.setItem('elementosFavoritos', this.elementosFavoritos.toString())
        } else {

        }
        console.log(this.elementosFavoritos);

    }

    comprobarSiEstaSeleccionado(producto: producto){

      return (this.elementosFavoritos.indexOf(producto.url) >= 0)
      // const estaDentroDelArray: boolean =
    }




    filtrarProductos(filtro: Filtro){

        console.log('filtro que viene del hijo', filtro);

        /// filtrar primero el texto
        const arrayFiltrandoTexto = this.filtrarTexto( this.productos, filtro);

        /// filtro el precio
        const arrayFiltrandoPrecio = this.filtrarPrecio( arrayFiltrandoTexto, filtro);

        /// filtro el color
        const arrayFiltrandoColor = this.filtrarColor( arrayFiltrandoPrecio, filtro);

        /// filtro el tipo
        const arrayFiltrandoTipo = this.filtrarTipo( arrayFiltrandoColor, filtro);


        this.productosMostrar = [... arrayFiltrandoTipo];


    }




    filtrarTexto(array: producto[], filtro: Filtro) : producto[]{

        const texto = filtro.texto;

        // no es verdad , o que no existe , o que es null, o que es false; -1, '', null, undefined,

        if(! texto){
            return array
        } else {
            return array.filter((producto: producto)=>{
            const nombre = producto.nombre.toLowerCase().trim()
            return nombre.includes(texto.toLowerCase().trim());
            })
        }
    }

    filtrarPrecio(array: producto[], filtro: Filtro): producto[]{

        console.log('FILTRO PRECIO', filtro)
        const precioMaximo = filtro.precio.precioMaximo;
        const precioMinimo = filtro.precio.precioMinimo;

        return array.filter((producto: producto)=>{
            const precioDeEsteProducto = this.cestaServ.precioFinal(producto);
            return ( precioDeEsteProducto > precioMinimo ) && ( precioDeEsteProducto < precioMaximo)
    })
    }

    filtrarColor(array: producto[], filtro: Filtro): producto[]{

        const color = filtro.color
        if( !color || ( color === 'todos' ) ){ // si el color es igual a 'todos'
            return array // no apliques ningun filtro
        }else{
            return array.filter((producto: producto)=>{
            const arrayDeColoresDisponibles = producto.colores;
            return arrayDeColoresDisponibles.includes(color)
            })
        }
    }

    filtrarTipo(array: producto[], filtro: Filtro): producto[]{

        const tipo = filtro.tipo; // si el tipo es 'todos'
        if( !tipo || (tipo === 'todos') ){ // no apliques ningun filtro
            return array
        }else{
            return array.filter((producto:producto)=>{
            return producto.tipo === tipo
            })
        }
    }

    ngOnInit(): void {

        this.db.collection('productos').valueChanges().subscribe(( res )=>{

            this.productos = res as producto[];
            this.filtrarProductos({
                precio:{
                precioMaximo: localStorage.getItem('precioMaximo') ? parseInt(localStorage.getItem('precioMaximo')) : 0,
                precioMinimo: localStorage.getItem('precioMinimo') ? parseInt(localStorage.getItem('precioMinimo')) : 100
                },
                tipo: localStorage.getItem('tipo') ? localStorage.getItem('tipo') : 'todos',
                color: localStorage.getItem('color') ? localStorage.getItem('color') : 'todos',
                texto: localStorage.getItem('texto') ? localStorage.getItem('texto') : null,
            });

        })
    }

    navegar(i){

        console.log('navegar', i);
        this.router.navigate([ 'detalle-producto', i ])
    }

}
