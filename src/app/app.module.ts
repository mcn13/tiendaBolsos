import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

const config = {
  apiKey: 'AIzaSyAvZhm3aJT2DdF3Wy4HFfsYlNbEJzMN104',
  authDomain: 'tienda-bolsos.firebaseapp.com',
  projectId: 'tienda-bolsos',
  storageBucket: 'tienda-bolsos.appspot.com',
  messagingSenderId: '1020550770465',
  appId: '1:1020550770465:web:2c74126da53cd1cc471860',
  measurementId: 'G-SRHJ03BNQY',
};
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
