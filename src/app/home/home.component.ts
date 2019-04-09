import { Component, OnInit } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {
  signedIn: boolean = false;

  constructor( public amplifyService: AmplifyService ) {

    this.amplifyService = amplifyService;
    this.amplifyService.auth().currentAuthenticatedUser()
      .then(user => {
        console.log(user)
        this.signedIn = true
      })
      .catch(error => this.signedIn = false)
    this.amplifyService.authStateChange$
        .subscribe(authState => (this.signedIn = authState.state === 'signedIn'));

}

  ngOnInit() {

  }


}
