import { Component, OnInit } from '@angular/core';
import * as introJs from 'intro.js/intro.js';

declare const clevertap:any;
@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  introJS = introJs();
  constructor() { }

  ngOnInit(): void {
    clevertap.event.push("Books Listing", {
      "Product name":"Books Demo",
      "Category":"book_listing"
    });

      this.introJS.setOptions({
      steps: [
      {
         element: '#book1',
         intro: 'Welcome to your new app!',
         position: 'bottom'
      },
      {
         element: '#book2',
         intro: "Ok, wasn't that fun?",
         position: 'right'
      },
      {
         element: '#book3',
         intro: "let's keep going",
         position: 'top'
      },
      {
         element: '#book4',
         intro: 'More features, more fun.',
         position: 'right'
      },
      {
         element: '#book5',
         intro: "Ok, wasn't that fun?",
         position: 'right'
      },
      {
         element: '#book6',
         intro: "let's keep going",
         position: 'top'
      },
      {
         element: '#book7',
         intro: 'More features, more fun.',
         position: 'right'
      }

   ],
   showProgress: true
  });
  this.introJS.addStep({
    element: '#book8',
    intro: 'You have completed the tour!.',
    position: 'right'
 });
  this.introJS.start();
  }

}
