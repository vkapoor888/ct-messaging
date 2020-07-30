import { Component, OnInit } from '@angular/core';
import {DOCUMENT} from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss']
})
export class ToasterComponent implements OnInit {

  message = 'You didn\'t  buy any product for long. Do you want to buy on now?';
  display = false;
  linkToFeature = "http://localhost:4200/recieve";
  
  constructor(@Inject(DOCUMENT) private document: Document){

  }

  ngOnInit(): void {
  }

  closeToast(){
    this.display=false
    var toastElement = document.getElementById("wizParDiv0");
		if (toastElement.style.display === "none") {
			toastElement.style.display = "block";
		} else {
			toastElement.style.display = "none";
		}
}

}
