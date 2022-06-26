import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../models/company.model';
const baseUrl = 'http://localhost:8080/company';
@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  constructor(private http: HttpClient) { }
  getAll(): Observable<Company[]> {
    return this.http.get<Company[]>(baseUrl);
  }
  get(id: any): Observable<Company> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post('http://localhost:8080/company/add', data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.post(`${baseUrl}/update/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/delete/${id}`);
  }

}
