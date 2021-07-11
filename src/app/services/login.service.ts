import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private readonly http: HttpClient) { }

  login(data) {
    return this.http.post<any>('https://localhost:44309/api/auth/login', data);
  }
  
}
