import { Component, OnInit } from '@angular/core';
import {Tab} from './../tab/tab.component';
import * as introJs from 'intro.js';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})

export class Tabs implements OnInit {
  introJS = introJs();
  constructor() { }

  tabs: Tab[] = [];
  selectTab(tab: Tab) {
    this.tabs.forEach((tab) => {
      tab.active = false;
    });
    tab.active = true;
    if(tab.tabTitle === `Products`){
      this.introJS.setOptions({
        steps: [
        {
           element: '#step1',
           intro: 'Welcome to your new app!',
           position: 'bottom'
        },
        {
           element: '#step2',
           intro: "Ok, wasn't that fun?",
           position: 'right'
        },
        {
           element: '#step3',
           intro: "let's keep going",
           position: 'top'
        }
        /*,
        {
           element: '#step4',
           intro: 'More features, more fun.',
           position: 'right'
        } */
     ],
     showProgress: true
    });
    }else{
      this.introJS.setOptions({
        steps: [
        {
           element: '#t2-step1',
           intro: 'Welcome to your new app!',
           position: 'bottom'
        },
        {
           element: '#t2-step2',
           intro: "Ok, wasn't that fun?",
           position: 'right'
        },
        {
           element: '#t2-step3',
           intro: "let's keep going",
           position: 'top'
        }
        /*,
        {
           element: '#t2-step4',
           intro: 'More features, more fun.',
           position: 'right'
        } */
     ],
     showProgress: true
    });
    }
    this.introJS.start();
  }

  addTab(tab: Tab) {
    if (this.tabs.length === 0) {
      tab.active = true;
    }
    this.tabs.push(tab);
  }

  ngOnInit(): void {
  }

}
