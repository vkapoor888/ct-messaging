import { Component, OnInit, Input } from '@angular/core';
import { Tabs } from './../tabs/tabs.component';
import { from } from 'rxjs';

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class Tab implements OnInit {

  @Input() tabTitle: string;
  active: boolean;

  constructor(tabs:Tabs) {
    tabs.addTab(this);
  }

  ngOnInit(): void {
  }
}
