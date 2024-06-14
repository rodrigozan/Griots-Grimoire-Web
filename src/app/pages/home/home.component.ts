import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { Router } from '@angular/router'

import { LocalStorageService } from '../../services/local-storage/local-storage.service'
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
  storedValue: string | null = ''
  isLogged = false
  needRegister = false

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.saveValue()
    this.getValue()
    if(this.storedValue === 'griots'){
      this.goToTimeline()
    }
    
  }

  public saveValue(): void {
    const value = 'griots'
    this.localStorageService.setItem('myKey', value)
  }

  public getValue(): void {
    this.storedValue = this.localStorageService.getItem('myKey')    
  }
  
  public goToRegister() {
    this.isLogged = true
  }

  public goToTimeline(): void {
    this.router.navigate(['/timeline'])
  }
}
