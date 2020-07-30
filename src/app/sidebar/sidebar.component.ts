import { Component, OnInit } from '@angular/core';
import * as introJs from 'intro.js/intro.js';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  constructor() {}
  introJS = introJs();

  ngOnInit(): void {}

  startSteps(): void {
    this.introJS
      .setOptions({
       steps: [
       {
         element: '#step1-li',
         intro: 'Welcome to steps on the sidebar!',
         position: 'bottom',
         value: 'Step 1One'
       },
       {
         element: '#step2-li',
         intro: "Ok, wasn't that fun?",
         position: 'right',
         value: 'Step 2Two'
       },
       {
         element: '#step3-li',
         intro: "let's keep going",
         position: 'top',
         value: 'Step 3Three'
       },
       {
         element: '#step4-li',
         intro: 'More features, more fun.',
         position: 'right',
         value: 'Step 4Four'
       }
     ],
     hidePrev: true,
     hideNext: false
    })
    .start();
    this.introJS.onchange(function(targetElement) {
      console.log(`next step called!!`+targetElement.outerHTML);
    });

    this.introJS.onexit(function() {
      alert("exit of introduction");
    });
  }
}
