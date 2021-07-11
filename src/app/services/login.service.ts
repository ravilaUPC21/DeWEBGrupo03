import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private readonly http: HttpClient) { }

  getLogin() {
    return this.http.get('https://localhost:44309/api/auth/login');
  }    
}
