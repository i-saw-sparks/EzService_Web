import { Component} from '@angular/core';
import { AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import { Observable } from 'rxjs';


@Component({
  selector: 'users-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.css']
})
export class UsersTableComponent {

  itemRef: AngularFireList<any>;
  dataSource: Observable<any>;
  

  constructor(private db: AngularFireDatabase) { 
    this.itemRef = db.list('Usuarios');
    this.dataSource = this.itemRef.valueChanges();
  }

  save(obj){
    this.itemRef.update(obj.id,{apellidos:obj.apellidos, correo:obj.correo, nombre:obj.nombre});
  }

  delete(obj){
    if(typeof obj.id !== "undefined"){
      this.itemRef.remove(obj.id); 
    }
  }

}

