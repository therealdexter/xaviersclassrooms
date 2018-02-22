import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class MessageService {

  constructor(
    private http: Http
  ) { }

  postMessages(message){
    
    let headers = new Headers();
    headers.append('Content-Type','application/json');

    return this.http.post('users/send', message, {
      headers: headers
    }).map(res => res.json());
  }

}
