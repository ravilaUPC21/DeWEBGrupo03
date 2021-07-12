import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComproService {
  constructor(private readonly http: HttpClient) { }

  listRuc(ruc) {
    const token = localStorage.getItem('token');
    const headers= new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(`https://localhost:44309/api/comprobante/lista/ruc?ruc=${ ruc }`, { headers: headers });
  }
  
  listDate(date) {
    const token = localStorage.getItem('token');
    const headers= new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(`https://localhost:44309/api/comprobante/lista/date?date=${ date }`, { headers: headers });
  }
  
}
