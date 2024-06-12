import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GrimoireApiService {

  apiUrl: any;

  constructor(private http: HttpClient) {
    this.apiUrl = process.env['API_URL'];
  }

  get(rota: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${rota}`);
  }
}
