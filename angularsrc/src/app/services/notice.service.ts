import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'; //as we are working with observables
import { tokenNotExpired } from 'angular2-jwt';


@Injectable()
export class NoticeService {

  constructor(
    private http: Http
  ) { }

  addNotice(notice){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('users/addnotice', notice, {
      headers: headers
    }).map(res => res.json());

  }

  getNotices(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get('users/notices', {
      headers: headers
    }).map(res => res.json());

  }

}
