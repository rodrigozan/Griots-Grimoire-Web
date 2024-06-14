import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'

import { RegisterComponent } from '../../components/home/register/register.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    RegisterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = 'Griots Grimoire'   
  isLogged = false

  constructor() { }
  
  public goToRegister() {
    this.isLogged = true
  }

}
