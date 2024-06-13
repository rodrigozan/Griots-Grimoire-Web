import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { CommonModule } from '@angular/common'

import { HeaderComponent } from './components/header/header.component'
import { HomeComponent } from './pages/home/home.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HomeComponent, HeaderComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Griots Grimoire' 
  itsTrue = false

  constructor(){}
}
