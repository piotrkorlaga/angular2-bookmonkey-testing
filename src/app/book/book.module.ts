import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { BookComponent } from './book.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDataService } from './shared';

import { routing } from './book.routing';
import { ShoutPipe } from './shared';
import { RedDirective } from './shared';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,

    routing
  ],
  declarations: [BookComponent, BookListComponent, ShoutPipe, RedDirective],
  providers: [BookDataService]
})
export class BookModule { }
