import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ProductosComponent } from './pages/productos/productos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { PasarelaComponent } from './pages/pasarela/pasarela.component';
import { DetalleProductoComponent } from './pages/detalle-producto/detalle-producto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// angular material
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { ImportePagarComponent } from './componentes/importe-pagar/importe-pagar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './componentes/header/header.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FiltrosComponent } from './components/filtros/filtros.component';
import {MatSelectModule} from '@angular/material/select';
import { NgxSliderModule } from '@angular-slider/ngx-slider';





// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyAVW9QjoHAUfU8qp0aiQkcNThGV44StzH8",
  authDomain: "tiendaropa-776e3.firebaseapp.com",
  projectId: "tiendaropa-776e3",
  storageBucket: "tiendaropa-776e3.appspot.com",
  messagingSenderId: "91720841276",
  appId: "1:91720841276:web:765a6b9280f8a8ce50ab39",
  measurementId: "G-F8GG49BP2S"
};
@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    ContactoComponent,
    PasarelaComponent,
    DetalleProductoComponent,
    CarritoComponent,
    ImportePagarComponent,
    HeaderComponent,
    FiltrosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    BrowserAnimationsModule, // firestore,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatListModule,
    MatDialogModule,
    MatStepperModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatSelectModule,
    NgxSliderModule



  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
