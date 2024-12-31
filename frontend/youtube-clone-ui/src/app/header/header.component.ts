import { Component, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {NgIf} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    standalone: true,
    imports: [
        MatIconModule,
        MatToolbarModule,
        NgIf,
        MatButtonModule
    ],
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuthenticated : boolean =false;
  countryCode: string = "EG";
  constructor(private oidcSecurityService : OidcSecurityService ) {

  }

  ngOnInit(): void {
    this.oidcSecurityService.isAuthenticated$.subscribe(({isAuthenticated})=>
      {
        this.isAuthenticated = isAuthenticated;
      })
  }


  login()
  {
    this.oidcSecurityService.authorize();
  }


  logOff() {
    this.oidcSecurityService.logoffAndRevokeTokens();
  }
}
