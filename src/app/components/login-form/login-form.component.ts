import { Component, OnInit, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
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
    ),
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ height: 0, opacity: 0, backgroundColor:'#9F3131', color:'#969696' }),
            animate('500ms ease-out',
            style({ height: '*', opacity: 1, backgroundColor:'*', color:'*' }))
          ]
        )
      ]
    )
  ]
})
export class LoginFormComponent implements AfterViewChecked {
  loginParams: any = {};
  loading: boolean;
  loginFailed: boolean;
  errorMessage: string;

  constructor(public authService: AuthService, private cdRef: ChangeDetectorRef) {
    this.loading = true;
  }

  ngAfterViewChecked(): void {
    this.loading = false;
    this.cdRef.detectChanges();
  }

  login() {
    this.authService.login(this.loginParams.email, this.loginParams.password).catch((error) => {
      this.loginFailed = true;
      this.errorMessage = error.message;
      console.log(error);
      switch (error.code) {
        case 'auth/wrong-password':
          this.errorMessage = "Wrong password, try again";
          break;
        case 'auth/user-not-found':
          this.errorMessage = "User not found, try again";
          break;
        case 'auth/user-disabled':
          this.errorMessage = "Your user is disabled, please contact an administrator";
          break;
        default:
          this.errorMessage = error.message;
          break;
      }
    });
  }
}
