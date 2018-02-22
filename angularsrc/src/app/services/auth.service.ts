import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'; //as we are working with observables
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {

  authToken: any;
  person: any;

  constructor(
    private http: Http
  ) { }

  registerPerson(person){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('users/register',person, {
      headers: headers
    }).map(res => res.json());
  }

  authenticatePerson(person){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('users/authenticate',person, {
      headers: headers
    }).map(res => res.json());
  }

  storePerson(token, person){
    localStorage.setItem("id_token",token);
    localStorage.setItem("person",JSON.stringify(person));
    this.authToken = token;
    this.person = person;
  }

    getProfile(){
    let headers = new Headers();
    this.loadToken();
    headers.append("Authorization",this.authToken);
    headers.append("Content-Type","application/json");
    return this.http.get('users/profile',{headers: headers}).map(res => res.json());
  }

  isTeacherLoggedIn(){
    const persontoken = JSON.parse(localStorage.getItem('person'));
    return persontoken.isTeacher;
  }

  getLoggedInDetails(){
    return JSON.parse(localStorage.getItem('person'));
  }

  uidExists(uidtoken){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('users/uidexists',uidtoken, {headers: headers}).map(res => res.json());
  }


  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn(){
    return tokenNotExpired('id_token');
  }

  logout(){
    this.authToken = null;
    this.person = null;
    localStorage.clear();
  }

}
