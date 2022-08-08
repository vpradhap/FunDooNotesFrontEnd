import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  BaseUrl = environment.BASEURL
  constructor(private httpClient: HttpClient) { }

  PostService(url: string, data: any, token: boolean, httpHeadersOptions: any) {
    console.log(data);
    return this.httpClient.post(this.BaseUrl + url, data, token && httpHeadersOptions)
  }
  GetService(url: string, token: boolean, httpHeadersOptions: any) {
    return this.httpClient.post(this.BaseUrl + url,token && httpHeadersOptions)
  }
  PutService() {

  }
  DeleteService() {

  }
}
