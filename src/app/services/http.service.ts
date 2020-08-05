import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient:HttpClient) { }

  public get<T>(url, params = null):Observable<T> {
    return this.httpClient.get<T>(url, {
      params: params
    });
  }
}
