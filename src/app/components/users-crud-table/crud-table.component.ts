import { Component, Inject} from '@angular/core';
import { AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'users-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.css']
})
export class UsersTableComponent {

  itemRef: AngularFireList<any>;
  dataSource: Observable<any>;
  

  constructor(private db: AngularFireDatabase,  public dialog:MatDialog) { 
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

  openDialog(element) {
    const dialogRef = this.dialog.open(PhotoEditDialog, {data:{photoUrl: element.imageProfile, id:element.id}});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

@Component({
  selector: 'photo-edit-dialog',
  templateUrl: './photo-edit-dialog.html',
  styleUrls: ['./photo-edit-dialog.css']
})
export class PhotoEditDialog {
  users: AngularFireList<any>;
  formData: string;
  element: any;

  constructor(private db: AngularFireDatabase, public dialog:MatDialog, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.users = db.list('Usuarios');
    this.formData = data.photoUrl;
    this.element = data;
  }

  save(){
    this.users.update(this.element.id,{imageProfile:this.formData});
  }

}

