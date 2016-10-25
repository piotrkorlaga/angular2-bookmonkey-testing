/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BookComponent } from './book.component';

beforeEach( async(() => {
  TestBed.configureTestingModule({
    declarations: [
      BookComponent
    ],
    imports: [
      RouterTestingModule.withRoutes([])
    ]
  });
}));

describe('Component: Book', () => {
  it('should create an instance', async(() => {
    let fixture = TestBed.createComponent(BookComponent);
    let book = fixture.debugElement.componentInstance;
    expect(book).toBeTruthy();
  }));

  it('should render routerOutlet', async(() => {
    let fixture = TestBed.createComponent(BookComponent);
    let bookElem = fixture.debugElement.nativeElement;
    expect(bookElem.querySelector('router-outlet')).toBeTruthy();
  }));

  it('should render routerOutlet', async(() => {
    let fixture = TestBed.createComponent(BookComponent);
    let bookElem = fixture.debugElement.nativeElement;
    expect(bookElem.querySelector('p').textContent).toContain('works');
  }));
});
