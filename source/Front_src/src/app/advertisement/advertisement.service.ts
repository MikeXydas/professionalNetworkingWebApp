import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { GlobalVariable } from '../global'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AdvertisementService {

  apiRoot = GlobalVariable.BASE_API_URL;

  constructor(private http: HttpClient) { }

  postAd(ad) {
    return this.http.post(this.apiRoot + "User/post", ad, httpOptions);
  }

  getAdSkill(id) {
    return this.http.get(this.apiRoot + "User/ads/" + id);
  }

  getApplications(id) {
    return this.http.get(this.apiRoot + "User/applicants/" + id)
  }

  applyToAd(application) {
    return this.http.post(this.apiRoot + "User/apply", application, httpOptions);
  }
}
