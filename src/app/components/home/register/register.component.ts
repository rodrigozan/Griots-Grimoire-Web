import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  isLogged = false

  public goToLogin() {
    this.isLogged = true
    console.log('ok, button started in login')
  }

  public goToRegister() {
    this.isLogged = false
    console.log('ok, button started in register')
  }
}
