/* tslint:disable:no-unused-variable */
import { TestBed, async, inject } from '@angular/core/testing';
import { Http, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BookDataService } from './book-data.service';

const mockBooks = [
  {
    'title': 'Design Patterns',
    'isbn': '978-0-20163-361-0',
    'author': 'Erich Gamma / Richard Helm / Ralph E. Johnson / John Vlissides'
  },
  {
    'title': 'REST und HTTP',
    'isbn': '978-3-86490-120-1',
    'author': 'Stefan Tilkov / Martin Eigenbrodt / Silvia Schreier / Oliver Wolf'
  },
  {
    'title': 'Eloquent JavaScript',
    'isbn': '978-1-59327-584-6',
    'author': 'Marijn Haverbeke'
  }
];

describe('Service: BookData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backendInstance, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        BookDataService
      ]
    });
  });

  it('should return all books', async(inject([BookDataService, MockBackend], (service: BookDataService, backend: MockBackend) => {
    expect(service).toBeTruthy();
    backend.connections.subscribe((connection: MockConnection) => {
      let options = new ResponseOptions({
        body: JSON.stringify(mockBooks)
      });
      connection.mockRespond(new Response(options));
    });

    service
      .getAll()
      .subscribe(books => {
        expect(books).toEqual(mockBooks);
      });
  })));
});
