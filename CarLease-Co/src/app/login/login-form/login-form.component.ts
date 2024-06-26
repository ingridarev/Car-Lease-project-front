import { Component, inject } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';

import { MatCardModule } from '@angular/material/card';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatSliderModule,
    MatButtonModule,
    MatCardModule,
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent {
  readonly loginService = inject(LoginService);
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.min(3)]),
    password: new FormControl('', Validators.required),
  });
  login(): void {
    const usernameInputValue = this.loginForm.get('username')?.value;
    const passwordInputValue = this.loginForm.get('password')?.value;
    if (usernameInputValue && passwordInputValue) {
      this.loginService.login(usernameInputValue, passwordInputValue);
    }
  }
}
