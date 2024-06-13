import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'

import { LocalStorageService } from '../../services/local-storage/local-storage.service'
import { RegisterComponent } from '../../components/home/register/register.component'
import { TimelineComponent } from '../../components/home/timeline/timeline.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    TimelineComponent,
    RegisterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = 'Griots Grimoire' 
  storedValue: string | null = '';
  isLogged = false
  needRegister = false

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.saveValue()
    this.getValue()
    if(this.storedValue === 'griots'){
      this.isLogged = true
      this.needRegister = true
    }
    
  }

  public saveValue(): void {
    const value = 'griots';
    this.localStorageService.setItem('myKey', value);
  }

  public getValue(): void {
    this.storedValue = this.localStorageService.getItem('myKey');    
  }
  
  public goToRegister() {
    this.needRegister = true
    console.log('ok, button started')
  }
}
