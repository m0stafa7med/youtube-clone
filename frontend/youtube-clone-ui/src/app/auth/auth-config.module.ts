import { NgModule } from '@angular/core';
import { AuthModule } from 'angular-auth-oidc-client';


@NgModule({
    imports: [AuthModule.forRoot({
        config: {
            authority: 'airbnb-backend.us.auth0.com',
            redirectUrl: window.location.origin,
            clientId: 'aGVjoVb9banVCllgYJ7oeeMID3Gz6Qhs',
            scope: 'openid profile offline_access',
            responseType: 'code',
            silentRenew: true,
            useRefreshToken: true,
        }
      })],
    exports: [AuthModule],
})
export class AuthConfigModule {}
