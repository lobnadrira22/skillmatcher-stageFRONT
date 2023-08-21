import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OffreEmploiService {
  private baseUrl = 'http://localhost:8080/api/offres'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getAllOffres(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  createOffre(offre: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, offre);
  }

  deleteOffre(offreId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${offreId}`);
  }

  
getOffreById(offreId: number): Observable<any> {
  return this.http.get(`${this.baseUrl}/${offreId}`);
}
updateOffre(offreId: number, updatedOffreData: any): Observable<any> {
  const url = `${this.baseUrl}/${offreId}`;
  return this.http.put(url, updatedOffreData); // Send updatedOffreData as the request body
}




}
