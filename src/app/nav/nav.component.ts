import { Component, OnInit } from '@angular/core';
import { AmplifyService }  from 'aws-amplify-angular';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.styl']
})
export class NavComponent implements OnInit {
  constructor(public amplifyService: AmplifyService) { 
    this.amplifyService = amplifyService;
  }

  ngOnInit() {
  }

  signOut() {
    this.amplifyService.auth().signOut()
  }
}
