import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

// firebase libs
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore'; // firestore
import { AngularFireStorageModule } from '@angular/fire/storage'; // storage
import { AngularFireAuthModule } from '@angular/fire/auth'; // auth

//firebase credentials
const firebaseConfig = {
  apiKey: 'AIzaSyD13uHBnqcFwbpC-SD6CO_yNruqTI0nXzg',
  authDomain: 'servicios-4df28.firebaseapp.com',
  databaseURL: 'https://servicios-4df28.firebaseio.com',
  projectId: 'servicios-4df28',
  storageBucket: 'servicios-4df28.appspot.com',
  messagingSenderId: '305426721063',
  appId: '1:305426721063:web:336620744c6056f03b6102',
  measurementId: 'G-SB1YWT9R90',
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    //Angular Modules
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    //Initialize Firebase modules
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage

    //PWA Modules
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
