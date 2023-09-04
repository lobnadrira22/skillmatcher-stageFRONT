import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendrierService {

  private baseUrl = 'http://localhost:8080/api/calendriers';

  constructor(private httpClient: HttpClient) {}

  getAllCalendriers(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }
  addCalendrier(event: any): Observable<any> {
    return this.httpClient.post(this.baseUrl, event);
  }
 
  
}
