import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UploadVideoComponent} from './upload-video/upload-video.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi} from "@angular/common/http";
import {NgxFileDropModule} from "ngx-file-drop";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {SaveVideoDetailsComponent} from './save-video-details/save-video-details.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {MatChipsModule} from '@angular/material/chips';
import {VgCoreModule} from "@videogular/ngx-videogular/core";
import {VgControlsModule} from "@videogular/ngx-videogular/controls";
import {VgBufferingModule} from "@videogular/ngx-videogular/buffering";
import {VgOverlayPlayModule} from "@videogular/ngx-videogular/overlay-play";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {VideoPlayerComponent} from './video-player/video-player.component';
import {authInterceptor, AuthInterceptor} from 'angular-auth-oidc-client';
import {VideoDetailComponent} from './video-detail/video-detail.component';
import {HeaderComponent} from "./header/header.component";
import {AuthConfigModule} from "./auth/auth-config.module";
import {MatDividerModule} from "@angular/material/divider";
import {MatCardModule} from "@angular/material/card";

@NgModule({ declarations: [
        AppComponent,
        UploadVideoComponent,
        SaveVideoDetailsComponent,
        VideoPlayerComponent,
        VideoDetailComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        NgxFileDropModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        FlexLayoutModule,
        MatFormFieldModule,
        MatSelectModule,
        MatOptionModule,
        ReactiveFormsModule,
        MatInputModule,
        MatChipsModule,
        VgCoreModule,
        VgControlsModule,
        VgOverlayPlayModule,
        VgBufferingModule,
        MatSnackBarModule,
        HeaderComponent,
        HeaderComponent,
        AuthConfigModule,
        MatDividerModule,
        MatCardModule],
    providers: [provideHttpClient(withInterceptorsFromDi()),
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    ] })
export class AppModule {
}
