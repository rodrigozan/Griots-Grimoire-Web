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
  istrue = false

  public goToLogin() {
    this.istrue = true
    console.log('ok, button started in login')
  }

  public goToRegister() {
    this.istrue = false
    console.log('ok, button started in register')
  }
}
