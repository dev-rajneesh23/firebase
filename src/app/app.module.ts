import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { environment } from 'src/environments/environment';
import {AccordionModule} from 'primeng/accordion';
import { LoginModule } from './auth/login/login.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AuthService } from './auth/authservice/auth.service';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import {InputTextModule} from 'primeng/inputtext';
// import { SidebarComponent } from './home/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    VerifyEmailComponent,
    ForgetPasswordComponent,
    // SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    AccordionModule, 
    LoginModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    InputTextModule
  ],
  
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
