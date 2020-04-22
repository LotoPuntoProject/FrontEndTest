/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import {NbPasswordAuthStrategy, NbAuthModule} from '@nebular/auth';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {CoreModule} from './@core/core.module';
import {ThemeModule} from './@theme/theme.module';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {
  NbAlertModule, NbButtonModule,
  NbChatModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbDialogModule,
  NbIconModule,
  NbInputModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';
import {NgxLoginComponent} from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {UserService} from "./services/user.service";

@NgModule({
  declarations: [
    AppComponent,
    NgxLoginComponent,
    RegisterComponent,
    WelcomeComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    BrowserModule,
    NbButtonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'user',
          baseEndpoint: 'http://localhost:3001',
          login: {
            endpoint: '/login',
            requireValidToken: false,
            redirect: {
              success: '/Bienvenida',
              failure: null, // stay on the same page
            },
          },
          register: {
            endpoint: '/signup',
            requireValidToken: false,
            redirect: {
              success: '/Bienvenida',
              failure: null, // stay on the same page
            },
          },
        }),
      ],
      forms: {
        login: {
          redirectDelay: 500, // delay before redirect after a successful login, while success message is shown to the user
          strategy: 'user',  // strategy id key.
          rememberMe: false,   // whether to show or not the `rememberMe` checkbox
          showMessages: {     // show/not show success/error messages
            success: false,
            error: true,
          },
        },
        register: {
          strategy: 'user',  // strategy id key.
          rememberMe: false,   // whether to show or not the `rememberMe` checkbox
          showMessages: {     // show/not show success/error messages
            success: false,
            error: true,
          },  
          terms: false,
        },
      },

    }),
    NbInputModule,
    NbIconModule,
    NbCheckboxModule,
    NbAlertModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
