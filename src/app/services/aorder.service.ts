import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AOrder} from "../models/aorder.model";
import {Subdisision} from "../models/subdisision.model";
const baseUrl = 'http://localhost:8080/orders';
@Injectable({
  providedIn: 'root'
})
export class AOrderService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<AOrder[]> {
    return this.http.get<AOrder[]>(baseUrl);
  }
  get(id: any): Observable<AOrder> {
    return this.http.get(`${baseUrl}/${id}`);
  }


  getAuthorOrder(): Observable<AOrder[]> {
    return this.http.get<AOrder[]>(`http://localhost:8080/orders/authorders`);
  }

  getExecOrder(): Observable<AOrder> {
    return this.http.get(`${baseUrl}/execorders`);
  }


  create(data: any): Observable<any> {
    return this.http.post('http://localhost:8080/orders/add', data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.post(`${baseUrl}/update/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/delete/${id}`);
  }

  findBySubject(subject: any): Observable<AOrder[]> {
    return this.http.get<AOrder[]>(`${baseUrl}/findBySubject?subject=${subject}`);
  }



  accept(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/accept/${id}`);
  }

  revision(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/revision/${id}`);
  }

}




