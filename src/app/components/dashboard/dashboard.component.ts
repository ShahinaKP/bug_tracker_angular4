import { Component, Pipe ,PipeTransform } from '@angular/core';
import { Router } from '@angular/router';

import { ReturnSetInfoDataService } from './dashboard.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [ ReturnSetInfoDataService ]
})

export class DashboardComponent{
  data = []; 
  index = [];
  groupedData = [];

  constructor(private dataService: ReturnSetInfoDataService, private router: Router) {
    dataService.getSetInfoData().subscribe(res => {
      this.data = res;
      this.data.forEach(gropedItem => {
        let items = [];
        if (!gropedItem.name || !gropedItem.name.length) return;
      
        let firstLetter = gropedItem.name[0];
        let index = firstLetter;
        if (!this.groupedData[firstLetter]) {
          this.groupedData[firstLetter] = [];
          this.index.push(firstLetter);
        }        
        this.groupedData[firstLetter].push(gropedItem);
      });      
    });        
  }
  
  gotoCalendar() {
    this.router.navigate(['/calendar']);
  }
  
  indexTo(index) {    
    let element = document.getElementById('index'+index);
    let yPoint = element.offsetTop - 80;
    window.scrollTo(0,yPoint);
  }
  
}



