import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


export const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAueWsWmDMxI8grHw9nt1vwX78nhUOZ5P4",
        authDomain: "bug-tracker-app.firebaseapp.com",
        databaseURL: "https://bug-tracker-app.firebaseio.com",
        projectId: "bug-tracker-app",
        storageBucket: "bug-tracker-app.appspot.com",
        messagingSenderId: "46954325452"
    }
};

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFireAuthModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        DashboardComponent,
        HeaderComponent,
        FooterComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }