import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data: any = null;
  url: string = 'http://gateway-a.watsonplatform.net/calls/text/TextGetEmotion?apikey=API_KEY&outputMode=json&showSourceText=1&text=Let%20them%20set%20on%20at%20once%3B%20for%20I%20perceive';

  	constructor(public nav: NavController, public http: Http) {
	  this.http.get(this.url)
  	    .map(res => res.json())
  	    .subscribe(data => {
  	      this.data = [data];
  	      console.log(data);
  	  });
	  
	}
}