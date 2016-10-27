import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { BookComponent } from './book.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDataService, ConfirmCanActivateGuardService, RedDirective, ShoutPipe } from './shared';

import { routing } from './book.routing';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,

    routing
  ],
  declarations: [BookComponent, BookListComponent, ShoutPipe, RedDirective],
  providers: [ConfirmCanActivateGuardService, BookDataService]
})
export class BookModule { }
