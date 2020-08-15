import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  user: any = {};

  constructor(public authService: AuthService) {}

  signup() {
    console.log(this.user.email);
    console.log(this.user.password);
    console.log(this.user.name);
    console.log(this.user.lastname);

    /*
    this.authService.signup(
      this.user.email,
      this.user.password,
      this.user.name,
      this.user.lastname
    );
    */
  }
}
