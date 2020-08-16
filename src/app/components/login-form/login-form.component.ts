import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  animations: [
    trigger('fadeInState',
      [
        state('loading', style({ opacity: 0 })),
        state('loaded', style({ opacity: 1 })),
        transition('loading => loaded', animate('500ms ease-out'))
      ]
    )
  ]
})
export class LoginFormComponent implements AfterViewChecked {
  loginParams: any = {};
  loading: boolean;

  constructor(public authService: AuthService) {
    this.loading = true;
  }

  ngAfterViewChecked(): void {
    this.loading = false;
  }

  login() {
    this.authService.login(this.loginParams.email, this.loginParams.password);
  }
}
