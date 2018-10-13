import { DataShareSvc } from './../../services/DataShareSvc';
import { User } from './../../model/user.model';
import { BackendService } from './../../services/backend.service';
import { Component, OnInit } from '@angular/core';
import {
  AuthService,
  FacebookLoginProvider
} from 'angular5-social-login';

@Component({
  selector: 'signin-social',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private socialAuthService: AuthService, private backSvc: BackendService,
              private dataSvc: DataShareSvc) { }

  user : User
  ngOnInit() {    
  }

  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        // Now sign-in with userData
         this.user = userData;
         if(null != this.user){
            this.dataSvc.user.next(this.user);
         }
      }
    );
  }

}
