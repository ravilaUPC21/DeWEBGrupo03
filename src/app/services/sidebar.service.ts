import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
    constructor(private readonly http: HttpClient) { }
  
    getLogin() {
      return this.http.get('/api/auth/login');
    }
}
