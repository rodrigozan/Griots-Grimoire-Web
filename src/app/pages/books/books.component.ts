import { Component } from '@angular/core'

import { GrimoireApiService } from '../../services/grimoire-api/grimoire-api.service'

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss'
})
export class BooksComponent {
  dados: any

  constructor(private apiService: GrimoireApiService) { }

  ngOnInit(): void {
    this.getUsers()
  }

  public getUsers() {
    this.apiService.get('User').subscribe((data) => {
      this.dados = data
      console.log('Dados de usuários:')
      console.log(this.dados)
    })
  }
}
