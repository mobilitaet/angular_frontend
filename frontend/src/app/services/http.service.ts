import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseURL = "https://www.mobilitaetproto.tk/";

@Injectable({
  providedIn: 'root'
})
export class HttpService <T> {

  constructor(private http: HttpClient) { }

  protected getList(url: string): Observable<T[]> {
    return this.http.get<T[]>(url);
  }

  protected get(url: string): Observable<T> {
    return this.http.get<T>(url);
  }

  protected add(url: string, item: T): Observable<T> {
    return this.http.post<T>(url,item);
  }

  protected remove(url: string): Observable<Object> {
    return this.http.delete(url);
  }

  protected updateUser(url: string, item: T): Observable<T> {
    return this.http.put<T>(url,item);
  }
}
