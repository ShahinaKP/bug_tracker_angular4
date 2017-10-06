import { Component, Pipe ,PipeTransform } from '@angular/core';
import animateScrollTo from 'animated-scroll-to';

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

  constructor(private dataService: ReturnSetInfoDataService) {
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
  
  indexTo(index) {    
    let element = document.getElementById('index'+index);
    let yPoint = element.offsetTop - 80;
    const options = {
      // duration of the scroll per 1000px, default 500
      speed: 500,
    
      // minimum duration of the scroll
      minDuration: 250,
    
      // maximum duration of the scroll
      maxDuration: 1500,
    
      // DOM element to scroll, default window
      // Pass a reference to a DOM object
      // Example: document.querySelector('#element-to-scroll'),
      element: window,
    
      // should animated scroll be canceled on user scroll/keypress
      // if set to "false" user input will be disabled until animated scroll is complete
      cancelOnUserAction: true
    };
    
    animateScrollTo(yPoint, options);
  }
  
}



