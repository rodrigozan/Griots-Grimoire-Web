import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

import { environment } from '../../../environment/environment'

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
}
