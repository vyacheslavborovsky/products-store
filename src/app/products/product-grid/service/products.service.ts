import { environment } from '../../../../environments/environment';
import { HttpService } from '../../../shared/services/http.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { URLSearchParams, Headers} from '@angular/http';

@Injectable()
export class ProductsService {
  constructor(private httpService: HttpService) {}

  public getProducts(): Observable<Object> {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    const params = new URLSearchParams();
    params.set('key', environment.apiKey);

    const requestOptions = {
      headers: headers,
      method: 'GET',
      url: `${environment.baseApiURL}/product_catalog.json`,
      params: params
    };

    return this.httpService.executeHttpRequest(requestOptions);
  }
}
