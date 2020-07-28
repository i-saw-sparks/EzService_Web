import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {
  appTitle:string;

  constructor() {
    this.appTitle = 'EzService';
   }

  ngOnInit(): void {
  }

}
