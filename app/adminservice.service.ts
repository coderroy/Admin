import { Injectable } from '@angular/core';
import { FeedBackPosts } from "src/app/admin.model";
import { Properties } from "src/app/admin.model";
import { Users, Owners } from "src/app/admin.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
  users = new Array<Users>();
  owners = new Array<Owners>();
  verfiedproperties = new Array<Properties>();
  unverfiedproperties = new Array<Properties>();
  feedbacks = new Array<FeedBackPosts>();
  selectedproperty = new Properties();
  constructor(private http : HttpClient) { }
  admin_url = "http://localhost:59207/api/Admin";
  feedback_url = "http://localhost:59207/api/FeedbackTables";
  get_users() :Observable<any> {
    return this.http.get(this.admin_url+"/users");
  }
  get_owners() :Observable<any> {
    return this.http.get(this.admin_url+"/owners");
  }
  get_VerifiedProperties() :Observable<any> {
    return this.http.get(this.admin_url+"/verified");
  }
  get_UnverifiedProperties() : Observable<any> {
    return this.http.get(this.admin_url+"/unverified");
  }

  get_feedbacks() : Observable<any> {
    return this.http.get(this.feedback_url);
  }

  verifyproperty(property : Properties) {
    var body = JSON.stringify(property);
    let headeroption : HttpHeaders = new HttpHeaders()
    .set( 'Content-Type', 'application/json')
    .set('Access-Control-Allow-Origin','http://localhost:4200') ;
    return this.http.post(this.admin_url+"/verify/"+property.PropertyId, body, {headers:headeroption});
  }

  delete_feedback(feedback : FeedBackPosts){
    var body = JSON.stringify(feedback);
    let headeroption : HttpHeaders = new HttpHeaders()
    .set( 'Content-Type', 'application/json')
    .set('Access-Control-Allow-Origin','http://localhost:4200') ;
    return this.http.post(this.feedback_url+"/delete",body, {headers:headeroption});
  }
}

