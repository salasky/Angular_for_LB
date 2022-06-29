import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AOrder} from "../models/aorder.model";
import {EOrder} from "../models/eorder.model";

const baseUrl = 'http://localhost:8080/orders';
@Injectable({
  providedIn: 'root'
})
export class EOrderService {

  constructor(private http: HttpClient) { }


  get(id: any): Observable<EOrder> {
    return this.http.get(`${baseUrl}/emp/${id}`);
  }


  getExecOrder(): Observable<EOrder[]> {
    return this.http.get<EOrder[]>(`http://localhost:8080/orders/execorders`);
  }





  perform(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/perform/${id}`);
  }


  control(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/control/${id}`);
  }

  secondperform(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/secondperform/${id}`);
  }

}
