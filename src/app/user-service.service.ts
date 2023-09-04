import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private baseUrl = 'http://localhost:8080/employeurs';

  constructor(private http: HttpClient) { }

  getAllEmployeurs(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  ajouterEmployeur(employeur:any):Observable<any>{
    return this.http.post(`${this.baseUrl}`, employeur);

  }

  supprimerEmployeur(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  
  getEmployeurById(Id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${Id}`);
  }

}
