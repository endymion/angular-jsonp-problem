import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpClientModule,
  HttpClientJsonpModule
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  constructor(private http: HttpClient) { }

  footerURL = 'assets/footer.min.json';

  public getFooter() {  
    return this.http.jsonp(this.footerURL,'callback')
        .subscribe(data => {
          console.log('data: ' + JSON.stringify(data));
        })
  }
}
