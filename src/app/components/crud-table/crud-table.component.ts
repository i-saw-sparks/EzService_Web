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

  itemRef: AngularFireList<any>;
  dataSource: Observable<any>;
  

  constructor(db: AngularFireDatabase) { 
    this.itemRef = db.list('Usuarios');
    this.dataSource = this.itemRef.valueChanges();
  }

}

