import { Component} from '@angular/core';
import { Observable } from 'rxjs';

import { ReturnSetInfoDataService } from './dashboard.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [ ReturnSetInfoDataService ]
})
export class DashboardComponent {
  data: Observable<Array<any>>;

  constructor(private dataService: ReturnSetInfoDataService) {
    dataService.getSetInfoData().subscribe(res => {
      this.data = res;
      debugger
    });
    
  }
}