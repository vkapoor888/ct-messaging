import { Component, OnInit ,AfterViewInit, ElementRef, ViewChild, Inject} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { DOCUMENT } from '@angular/common';
import * as introJs from 'intro.js/intro.js';

declare const clevertap:any;
declare const jQuery:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Intro Bootstrap';
  introJS = introJs();
  closeResult: string;
  @ViewChild('myModal') myDiv: ElementRef;

  constructor(private modalService: NgbModal ,@Inject(DOCUMENT) document) {}

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  notificationCallback =(msg) => {
    //raise the notification viewed and clicked events in the callback
    clevertap.raiseNotificationViewed();
    //In case of javascript
    //var modal = document.getElementById("myModal");
    //modal.style.display = "block";
    this.open(msg.kv.event);
    //window.parent.document.getElementById('wizParDiv0').innerText=msg.kv.event;
    console.log(JSON.stringify(msg.msgContent.html));//your custom rendering implementation here
    var $button = jQuery("<button></button>");//element on whose click you want to raise the notification clicked event
    $button.click(function(){
       clevertap.raiseNotificationClicked();
    });
  };

  closeModal(){
    let modal=this.myDiv.nativeElement;
    console.log(modal)
    modal.hidden = true;
  }
  ngOnInit(): void {
 /*   this.introJS.setOptions({
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
      },
      {
         element: '#step4',
         intro: 'More features, more fun.',
         position: 'right'
      }
   ],
   showProgress: true
  });
  this.introJS.start();
  */
  }
}
