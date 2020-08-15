import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent {
  appTitle:string;

  constructor(public authService: AuthService) {
    this.appTitle = 'EzService';
   }

   logout(){
    this.authService.logout();
   }

}
