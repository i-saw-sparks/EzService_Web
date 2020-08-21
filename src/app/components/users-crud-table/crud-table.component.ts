import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.css']
})
export class CrudTableComponent {

  actName:string;

  itemRef: AngularFireList<any>;
  dataSource: Observable<any>;
  

  constructor(db: AngularFireDatabase) { 
    this.itemRef = db.list('Usuarios');
    this.dataSource = this.itemRef.valueChanges();
  }

  save(obj){
    console.log(obj);
    this.itemRef.update(obj.id,{apellidos:obj.apellidos, correo:obj.correo, nombre:obj.nombre});
  }

}

