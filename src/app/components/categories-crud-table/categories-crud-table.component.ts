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

  add(){
    this.itemRef.push({Nombre:'default', Imagen: 'https://firebasestorage.googleapis.com/v0/b/servicios-4df28.appspot.com/o/defaults%2Fbookmark_border_black_192x192.png?alt=media&token=a9600608-f9e0-4e1e-ac57-2669ea71ec63'}).then(ref =>{
      this.itemRef.update(ref.key,{id:ref.key});
    }
    );
  }
}
