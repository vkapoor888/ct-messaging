import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksPurchaseComponent } from './books-purchase/books-purchase.component';


const routes: Routes = [
  {path: 'books' , component: BooksListComponent},
  {path: 'books_purchase' , component: BooksPurchaseComponent},
  {path: '', pathMatch: 'full', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
