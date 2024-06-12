import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { BooksComponent } from './pages/books/books.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BooksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'GriotsGrimoire';
}
