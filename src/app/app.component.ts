import { Component } from '@angular/core'
import { RouterOutlet, Router } from '@angular/router'
import { CommonModule } from '@angular/common'

// Services
import { LocalStorageService } from './services/local-storage/local-storage.service'
//Components
import { HeaderComponent } from './components/header/header.component'
// Pages
import { HomeComponent } from './pages/home/home.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Griots Grimoire' 
  isHidden = false
  storedValue: string | null = ''

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ){}

  ngOnInit() {
    //this.saveValue()
    this.getValue()
    if(this.storedValue === 'griots'){
      this.goToTimeline()
      this.isHidden = !this.isHidden;
    }else {
      this.goToHome()
    }
  }

  toggleVisibility(): void {
    this.isHidden = !this.isHidden;
  }

  public saveValue(): void {
    const value = 'griots'
    this.localStorageService.setItem('myKey', value)
  }

  public getValue(): void {
    this.storedValue = this.localStorageService.getItem('myKey')    
  }

  public goToHome(): void {
    this.router.navigate([''])
  }

  public goToTimeline(): void {
    this.router.navigate(['/timeline'])
  }
}
