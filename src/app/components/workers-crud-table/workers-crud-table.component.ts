import { Component, OnInit } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-workers-crud-table',
  templateUrl: './workers-crud-table.component.html',
  styleUrls: ['./workers-crud-table.component.css']
})
export class WorkersCrudTableComponent {

  itemRef: AngularFireList<any>;
  dataSource: Observable<any>;
  

  constructor(private db: AngularFireDatabase) { 
    this.itemRef = db.list('Servidores');
    this.dataSource = this.itemRef.valueChanges();
  }

  save(obj){
    this.itemRef.update(obj.id,{apellidos:obj.apellidos, nombre:obj.nombre, profesion:obj.profesion});
  }

  delete(obj){
    if(typeof obj.id !== "undefined"){
      this.itemRef.remove(obj.id); 
    }
  }

}
