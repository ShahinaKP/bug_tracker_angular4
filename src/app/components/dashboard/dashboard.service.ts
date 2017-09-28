import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class ReturnSetInfoDataService {
    constructor(private http: Http) {}

    getSetInfoData() : Observable<any> {
        return this.http.get('../../assets/json/setInfo.json')
        .map((res: Response) => {
            return res.json()
        })
        .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
    }
}