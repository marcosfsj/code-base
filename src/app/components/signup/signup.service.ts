import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { Signup } from './signup.model';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({
    providedIn: 'root'
})
export class SignupService {

    private signupsUrl = 'api/signups';

  constructor(private http: HttpClient) { }

  add(signup: Signup): Observable<Signup> {
    return this.http.post<Signup>(this.signupsUrl, signup, httpOptions);
  }

  update(signup: Signup): Observable<any> {
    return this.http.put(this.signupsUrl, signup, httpOptions);
  }

  delete(id: number): Observable<Signup> {
    const url = `${this.signupsUrl}/${id}`;
    return this.http.delete<Signup>(url, httpOptions);
  }

  findById(id: number): Observable<Signup> {
    const url = `${this.signupsUrl}/${id}`;
    return this.http.get<Signup>(url);
  }

  listAll(): Observable<Signup[]> {
    return this.http.get<Signup[]>(this.signupsUrl);
  }

}
