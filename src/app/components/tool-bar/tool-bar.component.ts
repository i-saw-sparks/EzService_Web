import { Component, OnInit } from '@angular/core';
import { app } from 'firebase';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent {
  appTitle: string;

  constructor() {
    this.appTitle = 'EzService';
  }

}
