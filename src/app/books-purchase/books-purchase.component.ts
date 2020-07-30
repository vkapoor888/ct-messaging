import { Component, OnInit } from '@angular/core';
import * as introJs from 'intro.js';

declare const clevertap:any;
@Component({
  selector: 'app-books-purchase',
  templateUrl: './books-purchase.component.html',
  styleUrls: ['./books-purchase.component.scss']
})
export class BooksPurchaseComponent implements OnInit {
  introJS = introJs();
  constructor() { }

  purchase(): void{
    clevertap.event.push("Books Purchase", {
      "Product name":"Books Demo",
      "Category":"book_purchase"
    });
  }
  ngOnInit(): void {
    this.introJS.setOptions({
      steps: [
        {
          element: '#pur-1',
          intro: 'Welcome to your new app!',
          position: 'bottom'
       },
       {
          element: '#pur-2',
          intro: "Ok, wasn't that fun?",
          position: 'right'
       },
       {
          element: '#pur-3',
          intro: "let's keep going",
          position: 'top'
       },
       {
          element: '#pur-4',
          intro: 'More features, more fun.',
          position: 'right'
       },
       {
          element: '#pur-5',
          intro: "Ok, wasn't that fun?",
          position: 'right'
       },
       {
          element: '#pur-6',
          intro: "let's keep going",
          position: 'top'
       },
       {
          element: '#pur-7',
          intro: 'More features, more fun.',
          position: 'right'
       },
       {
          element: '#pur-8',
          intro: 'Last but one.',
          position: 'right'
       },
       {
          element: '#pur-9',
          intro: 'End of list.',
          position: 'right'
       }
   ],
   showProgress: true
  });
  this.introJS.onexit(function() {

    if(this._introItems.length-1 === this._currentStep){

    }else{
      clevertap.event.push("Books Purchase Tour Abandoned", {
        "Product name":"Books Demo",
        "Category":"tour exited",
        "UserId" : 267
      });
    }
  });

  this.introJS.oncomplete(function() {
    clevertap.event.push("Books Purchase Tour Complete", {
      "Product name":"Books Demo",
      "Category":"tour complete",
      "UserId" : 267
    });
  });

  this.introJS.start();
  }

}
