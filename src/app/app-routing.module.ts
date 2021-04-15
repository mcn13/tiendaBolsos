import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { PasarelaComponent } from './pages/pasarela/pasarela.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { DetalleProductoComponent } from './pages/detalle-producto/detalle-producto.component';

const routes: Routes = [
  // Pagina principal
  {
    path: '',
    redirectTo: 'productos',
    pathMatch: 'full',
  },
  {
    path: 'contacto',
    component: ContactoComponent,
  },
  {
    path: 'pasarela',
    component: PasarelaComponent,
  },
  {
    path: 'productos',
    component: ProductosComponent,
  },
  {
    path: 'detalles-productos/:id',
    component: DetalleProductoComponent,
  },
  // si ponen cualquier url
  {
    path: '**',
    redirectTo: 'productos',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
