import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutoService {
  private baseUrl = 'http://localhost:8080/api/candidats';
  private baseurlemp = 'http://localhost:8080/employeurs';
  private baseurladmin = 'http://localhost:8080/admin';

  constructor(private http: HttpClient) { }

  registerCandidat(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, data);
  }
  loginCandidat(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, data);
  }
 /*  loginEmployeur(data: any): Observable<any> {
    return this.http.get(`${this.baseurlemp}/login`, { params: data });
  }

  loginAdmin(data: any): Observable<any> {
    return this.http.get(`${this.baseurladmin}/login`, { params: data });
  } */
}
