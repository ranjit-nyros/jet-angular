import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Angular2TokenService} from "angular2-token";
import {Router} from "@angular/router";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authService:AuthService,public tokenAuthService:Angular2TokenService,public authTokenService:Angular2TokenService,private router:Router) { }

  ngOnInit() {
  }
  logOut(){
    this.authService.logOutUser().subscribe();
  }
}
