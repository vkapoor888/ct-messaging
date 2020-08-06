//window.$ = window.jQuery = require('jquery'); // required for electron only --comment it for browser render
var clevertap = {event:[], profile:[], account:[], onUserLogin:[], notifications:[], privacy:[]};
 // replace with the CLEVERTAP_ACCOUNT_ID with the actual ACCOUNT ID value from your Dashboard -> Settings page
clevertap.account.push({"id": "TEST-988-Z8K-785Z"});
clevertap.privacy.push({optOut: false}); //set the flag to true, if the user of the device opts out of sharing their data
clevertap.privacy.push({useIP: false}); //set the flag to true, if the user agrees to share their IP data
 (function () {
		 var wzrk = document.createElement('script');
		 wzrk.type = 'text/javascript';
		 wzrk.async = true;
		 wzrk.src = ('https:' == document.location.protocol ? 'https://d2r1yp2w7bby2u.cloudfront.net' : 'http://static.clevertap.com') + '/js/a.js';
		 var s = document.getElementsByTagName('script')[0];
		 s.parentNode.insertBefore(wzrk, s);
  })();

  clevertap.onUserLogin.push({
    "Site": {
      "Name": "PradhanP",            // String
      "Identity": 267,              // String or number
      "Email": "pradipta2sky@gmail.com",         // Email address of the user
      "Phone": "+14125551234",           // Phone (with the country code)
      "Gender": "M",                     // Can be either M or F
      "DOB": new Date()                 // Date of Birth. Date object

   // optional fields. controls whether the user will be sent email, push etc.
    //  "MSG-email": false,                // Disable email notifications
    //  "MSG-push": true,                  // Enable push notifications
    //  "MSG-sms": true,                   // Enable sms notifications
    //  "MSG-whatsapp": true,              // Enable WhatsApp notifications

    }
   });
/*  clevertap.profile.push({
    "Site": {
      "Name": "PPradhan", // User's name
	    "Email": "praditpa2sky@gmail.com"
    }
   }); */

   /*clevertap.event.push("Initalized IntroJs", {
    "Product name":"Books Demo",
    "Category":"book_listing"
  });*/

  /*clevertap.event.push("Second IntroJs", {
    "Product name":"Books Demo",
    "Category":"book_purchase"
  });*/
  clevertap.event.push("Books Listing", {
    "Product name":"Books Demo",
    "Category":"book_listing"
  });
/*
  clevertap.event.push("Books Purchase", {
    "Product name":"Books Demo",
    "Category":"book_purchase"
  }); */

  //alert("Event Pushed!!");

  ///EXTENSION POINT TO INJECT CUSTOMISATION////
  clevertap.notificationCallback = function(msg){
    //alert(JSON.stringify(msg));
    // Raise the notification viewed and clicked events in the callback
    clevertap.raiseNotificationViewed();
    var toastElement = document.getElementById("wizParDiv0");
		if (toastElement.style.display === "none") {
			toastElement.style.display = "block";
    }
    //alert(msg.kv.insepector);
    window.parent.document.getElementById('heading').innerHTML=msg.kv.heading;
    window.parent.document.getElementById('desc').innerHTML=msg.kv.desc;
    console.log("new message recieved ::::::::::::::::::::::: ");
    console.log(":::::::::: msg.kvmsgId == "+JSON.stringify(msg.msgId));
    console.log(":::::::::: msg.kv == "+JSON.stringify(msg.kv));
    console.log(":::::::::: msg.msgContent == "+JSON.stringify(msg.msgContent));
    var $button = jQuery("#outerDiv");//element on whose click you want to raise the notification clicked event
		$button.click(function(){
      //alert('Toast Clicked!!');
      //$( "#Purchase" ).trigger( "click" );
		   clevertap.raiseNotificationClicked();
		});
	};

	function recieveCleverTapData(data){
		console.log("DATA=====================>"+data)
	}

	function recieveCleverTapData(){
		console.log("clever tap data recieved")
	}

