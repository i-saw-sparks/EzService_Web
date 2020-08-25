import { Component, OnInit } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categories-crud-table',
  templateUrl: './categories-crud-table.component.html',
  styleUrls: ['./categories-crud-table.component.css']
})
export class CategoriesCrudTableComponent {
  itemRef: AngularFireList<any>;
  dataSource: Observable<any>;
  

  constructor(private db: AngularFireDatabase) { 
    
    this.itemRef = db.list('Categorias');
    this.dataSource = this.itemRef.valueChanges();
  }

  save(obj){
    this.itemRef.update(obj.id,{ nombre:obj.Nombre, imagen:obj.Imagen});
  }

  delete(obj){
    if(typeof obj.id !== "undefined"){
      this.itemRef.remove(obj.id); 
    }
  }
}
