import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CandidatserviceService {
  private apiUrl = 'http://localhost:8080/api/candidats';
  constructor(private http: HttpClient) {}

  private userFullNameSubject = new BehaviorSubject<string>(''); // Initialize with an empty string
  userFullName$ = this.userFullNameSubject.asObservable();

  setUserFullName(userFullName: string): void {
    this.userFullNameSubject.next(userFullName);
  }
  getCandidatById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }
  /* updateProfile(updatedProfileData: any): Observable<any> {
    const url = 'http://localhost:8080/api/candidats/update';
    return this.http.put<any>(url, updatedProfileData);
  } */
  /* postuler(formData: FormData) {
    const url = `${this.apiUrl}/postuler`;
    return this.http.post(url, formData);
  } */

 
}
