import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Foo } from '../model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class FooService {

  private foosUrl = 'api/foos';

  constructor(private http: HttpClient) { }

  add(foo: Foo): Observable<Foo> {
    return this.http.post<Foo>(this.foosUrl, foo, httpOptions);
  }

  update(foo: Foo): Observable<any> {
    return this.http.put(this.foosUrl, foo, httpOptions);
  }

  delete(id: number): Observable<Foo> {
    const url = `${this.foosUrl}/${id}`;
    return this.http.delete<Foo>(url, httpOptions);
  }

  findById(id: number): Observable<Foo> {
    const url = `${this.foosUrl}/${id}`;
    return this.http.get<Foo>(url);
  }

  listAll(): Observable<Foo[]> {
    return this.http.get<Foo[]>(this.foosUrl);
  }

}
