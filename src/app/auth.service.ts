import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';

import { AngularFireDatabase } from '@angular/fire/database';
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


  public signup = (email, password, name, lastname) => {
    this.angularFireAuth
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        const id = this.angularFireAuth.currentUser;
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


  public  async login (email, password) {
    const result = await this.angularFireAuth
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        this.router.navigate(['root/adminPanel']);
      });
      return result;
  };  

  public isLogged() {
    return this.angularFireAuth.authState;
  }

  public logout() {
    this.angularFireAuth.signOut().then(() => {
      this.router.navigate(['login']);
      console.log('Logout');
    })
      .catch((error) => {
        console.log(error);
      });
  }
}
