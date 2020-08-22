import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-crud-view',
  templateUrl: './users-crud-view.component.html',
  styleUrls: ['./users-crud-view.component.css']
})
export class CrudViewComponent {
  constructor(private router:Router) { }

  onClick() {
    this.router.navigate(['../root/adminPanel']);
  }
}
