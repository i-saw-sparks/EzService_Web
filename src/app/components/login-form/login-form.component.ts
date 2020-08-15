import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  loginParams: any = {};

  constructor(public authService: AuthService) {

  }

  login() {
    this.authService.login(this.loginParams.email, this.loginParams.password);
  }
}
