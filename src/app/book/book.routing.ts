import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book.component';
import { BookListComponent } from './book-list/book-list.component';
import { ConfirmCanActivateGuardService } from './shared';

const routes: Routes = [{
  path: '',
  component: BookComponent,
  children: [{
    path: '',
    component: BookListComponent,
    canActivate: [ConfirmCanActivateGuardService]
  }]
}];

export const routing = RouterModule.forChild(routes);