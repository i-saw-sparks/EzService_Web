import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Component({
  selector: 'app-registro-servidor',
  templateUrl: './registro-servidor.component.html',
  styleUrls: ['./registro-servidor.component.css']
})
export class RegistroServidorComponent {

  itemRef: AngularFireList<any>;
  domName: string;
  domProfesion: string;

  constructor(db: AngularFireDatabase) {
    this.itemRef = db.list('Servidores');
  }

  save() {
    this.itemRef.push({ nombre: this.domName, profesion: this.domProfesion }).then(ref => {
      this.itemRef.update(ref.key,{id:ref.key})
    })
  }
/*
  update(newSize: string) {
    //this.itemRef.update({ size: newSize });
  }
  delete() {
    this.itemRef.remove();
  }
*/
}
