import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service'

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent {

  constructor(public authService: AuthService) {

  }

  logout() {
    this.authService.logout();
  }

}
