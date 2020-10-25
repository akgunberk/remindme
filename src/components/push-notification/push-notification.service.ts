import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PushNotificationService {

  constructor(private http: HttpClient) { }

  baseUri = "https://ilkadim.herokuapp.com"

  subscribeWebPush(subscription) {
    const url = `${this.baseUri}/subscribe`;
    return this.http.post(url, subscription)
  }

}
