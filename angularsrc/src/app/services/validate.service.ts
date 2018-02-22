import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Http, Headers} from '@angular/http'

@Injectable()
export class ValidateService {

  constructor(
    private authService: AuthService,
    private http: Http
  ) { }

  
  validateName(name){
    const re = /^[A-Z][a-z]*(-|\s)[A-Z][a-z]*$/;
    return re.test(name);
  }

   validateEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
   }

   validateUID(uid){
     const re = /^[0-9]{6}$/;
     return re.test(uid);
   }

   validatePasswords(password, cpassword){
     const re = /^(?=.*\d).{8,12}$/;
     return password == cpassword && re.test(password);
   }

   //username validations

   validateNotices(notices){
     const title = /^.{10,50}$/;
     const notice = /^.{50,250}$/;
     console.log(notices);
     return title.test(notices.title) && notice.test(notices.notice);
   }

   validateTitle(title){
    const re = /^.{10,50}$/;
    return re.test(title);
   }

   validateNoticeBody(body){
    const notice = /^.{50,250}$/;
    return notice.test(body);
   }

   //notice validation

   validateMessage(message){
    const title = /^.{10,50}$/;
    const mess = /^.{50,250}$/;
    return title.test(message.title) && mess.test(message.message);
  }

  validateMessageTitle(title){
   const re = /^.{10,50}$/;
   return re.test(title);
  }

  validateMessageBody(message){
   const re = /^.{50,250}$/;
   return re.test(message);
  }


  }
