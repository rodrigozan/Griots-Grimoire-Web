import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { GrimoireApiService } from '../../../services/grimoire-api/grimoire-api.service'

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  istrue = false
  registerForm: FormGroup
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: GrimoireApiService) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    this.loginForm = this.fb.group({
      usernameOrEmail: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const { username, email, password } = this.registerForm.value;
      this.authService.register(username, email, password).subscribe(response => {
        console.log('Usuário registrado com sucesso!', response);
      }, error => {
        console.error('Erro ao registrar usuário', error);
      });
    }
    if (this.loginForm.valid) {
      const { usernameOrEmail, password } = this.loginForm.value;
      this.authService.login(usernameOrEmail, password).subscribe(response => {
        console.log('Login realizado com sucesso!', response);
      }, error => {
        console.error('Erro ao realizar login', error);
      });
    }
  }

  public goToLogin() {
    this.istrue = true
    console.log('ok, button started in login')
  }

  public goToRegister() {
    this.istrue = false
    console.log('ok, button started in register')
  }
}
