import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {  
  constructor(private router: Router, private afAuth: AngularFireAuth) { }

  onSubmit() { 
    this.router.navigate(['/dashboard']);
  }
}



