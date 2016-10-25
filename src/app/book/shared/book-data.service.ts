import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Book } from './book.model';

@Injectable()
export class BookDataService {

  constructor(private http: Http) { }

  getAll(): Observable<Book[]> {
    return this.http
      .get('http://localhost:4730/books')
      .map(response => response.json() as Book[]);
  }

}
