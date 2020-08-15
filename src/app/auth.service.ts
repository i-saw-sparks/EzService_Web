import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';

import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  constructor(
    private angularFireAuth: AngularFireAuth,
    private afDB: AngularFireDatabase,
    private router: Router
  ) {
    this.isLogged();
  }

  /*
  public signup = (email, password, name, lastname) => {
    this.angularFireAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        const id = this.angularFireAuth.auth.currentUser.uid;
        this.afDB.database.ref(`/Usuarios/${id}`).set({
          id: id,
          nombre: name,
          apellidos: lastname,
          correo: email,
        });
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  */

  public login = (email, password) => {
    this.angularFireAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        console.log(response);
        this.router.navigate(['adminPanel']);
        console.log('Login exitoso');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  public isLogged() {
    return this.angularFireAuth.authState;
  }

  public logout() {
    this.angularFireAuth.auth.signOut().then((response) => {
      console.log(response);
      this.router.navigate(['login']);
      console.log('Logout');
    })
    .catch((error) => {
      console.log(error);
    });
  }
}
