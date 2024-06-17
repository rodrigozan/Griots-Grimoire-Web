import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import * as bcrypt from 'bcryptjs';

import { environment } from '../../../../environment/environment'

@Injectable({
  providedIn: 'root'
})
export class GrimoireApiService {

  apiUrl: any

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl
  }

  get(rota: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${rota}`)
  }

  register(username: string, email: string, password: string): Observable<any> {
    const hashedPassword = bcrypt.hashSync(password, 10);
    if (!username) {
      username = email.split('@')[0];
    }

    const payload = { username, email, password: hashedPassword };
    return this.http.post(`${this.apiUrl}/register`, payload);
  }

  login(usernameOrEmail: string, password: string): Observable<any> {
    const payload = { usernameOrEmail, password };
    return this.http.post(`${this.apiUrl}/login`, payload);
  }
}
