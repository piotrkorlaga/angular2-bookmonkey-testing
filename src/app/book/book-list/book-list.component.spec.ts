/* tslint:disable:no-unused-variable */
import { Directive, Pipe, PipeTransform } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { BookListComponent } from './book-list.component';
import { BookDataService } from '../shared';

import {  Observable } from 'rxjs/Observable';
import 'rxjs/add/Observable/of';

const booksStub = [
  {
    'title': 'Design Patterns',
    'isbn': '978-0-20163-361-0',
    'author': 'Erich Gamma / Richard Helm / Ralph E. Johnson / John Vlissides',
    'publisher': {
      'url': '12ab',
      'name': '12ab'
    }
  },
  {
    'title': 'REST und HTTP',
    'isbn': '978-3-86490-120-1',
    'author': 'Stefan Tilkov / Martin Eigenbrodt / Silvia Schreier / Oliver Wolf',
    'publisher': {
      'url': 'abcd',
      'name': 'abcd'
    }
  },
  {
    'title': 'Eloquent JavaScript',
    'isbn': '978-1-59327-584-6',
    'author': 'Marijn Haverbeke',
    'publisher': {
      'url': '1234',
      'name': '1234'
    }
  }
];
class BookDataServiceStub {
  getAll() {
    return Observable.of(booksStub);
  }
}

@Pipe({
  name: 'shout'
})
class ShoutPipeStub implements PipeTransform {
  transform(value) {
    return 'TESTSHOUT!';
  }
}

@Directive({
  selector: '[bmRed]'
})
class BmRedDirectiveStub {
  constructor() {
  }
}

beforeEach(async(() => {
  TestBed.configureTestingModule({
    declarations: [
      BookListComponent,
      ShoutPipeStub,
      BmRedDirectiveStub
    ],
    providers: [
      {
        provide: BookDataService,
        useClass: BookDataServiceStub
      }]
  });
}));

describe('Component: BookList', () => {
  it('should create an instance', async(() => {
    let fixture = TestBed.createComponent(BookListComponent);
    let bookList = fixture.debugElement.componentInstance;
    expect(bookList).toBeTruthy();
  }));

  it('should render p tag', async(() => {
    let fixture = TestBed.createComponent(BookListComponent);
    let bookListElem = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(bookListElem.querySelector('p[bmRed]').textContent).toContain('Toggle me!');
  }));

  it('should render three books in list', async(() => {
    let fixture = TestBed.createComponent(BookListComponent);
    let bookListElem = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(bookListElem.querySelectorAll('li').length).toBe(3);
  }));
});
