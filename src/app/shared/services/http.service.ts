import { Injectable } from '@angular/core';
import { Http, Request } from '@angular/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService {
  constructor (private http: Http) {}

  public executeHttpRequest(requestOptions): Observable<Object> {
    return this.http.request(new Request(requestOptions))
      .map(res => {
        return res.json();
      });
  }

}
