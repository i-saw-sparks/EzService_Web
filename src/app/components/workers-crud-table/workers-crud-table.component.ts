import { Component, OnInit } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog'

@Component({
  selector: 'app-workers-crud-table',
  templateUrl: './workers-crud-table.component.html',
  styleUrls: ['./workers-crud-table.component.css']
})
export class WorkersCrudTableComponent {

  itemRef: AngularFireList<any>;
  dataSource: Observable<any>;


  constructor(private db: AngularFireDatabase, public dialog:MatDialog) {
    this.itemRef = db.list('Servidores');
    this.dataSource = this.itemRef.valueChanges();
  }

  save(obj) {
    this.itemRef.update(obj.id, { apellidos: obj.apellidos, nombre: obj.nombre, profesion: obj.profesion });
  }

  delete(obj) {
    if (typeof obj.id !== "undefined") {
      this.itemRef.remove(obj.id);
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'dialog-content',
  templateUrl: './dialog-content-dialog.html',
  styleUrls: ['./dialog-content-dialog.css']
})
export class DialogContentExampleDialog {
  itemRef: AngularFireList<any>;
  dataSource: Observable<any>;

  constructor(private db: AngularFireDatabase, public dialog:MatDialog) {
    this.itemRef = db.list('Usuarios');
    this.dataSource = this.itemRef.valueChanges();
  }

}
