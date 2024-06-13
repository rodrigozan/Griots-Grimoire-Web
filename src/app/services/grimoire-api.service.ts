import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// import dotenv from 'dotenv'
// dotenv.config() 

@Injectable({
  providedIn: 'root'
})
export class GrimoireApiService {

  apiUrl: any;

  constructor(private http: HttpClient) {
    this.apiUrl = `https://localhost.com:5277/api`;
  }

  get(rota: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${rota}`);
  }
}
