import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class AppService {
  items: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {}
  
  getBugs() {
  	this.items = this.database.list('/projects');
  	return this.items;
  }
}