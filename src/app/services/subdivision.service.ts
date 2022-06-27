import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subdisision } from '../models/subdisision.model';
const baseUrl = 'http://localhost:8080/subdivisions';
@Injectable({
  providedIn: 'root'
})
export class SubdivisionService {
  constructor(private http: HttpClient) { }
  getAll(): Observable<Subdisision[]> {
    return this.http.get<Subdisision[]>(baseUrl);
  }
  get(id: any): Observable<Subdisision> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post('http://localhost:8080/subdivisions/add', data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.post(`${baseUrl}/update/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/delete/${id}`);
  }
}
